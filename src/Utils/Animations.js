import anime from "animejs/lib/anime.es";

const ANIMATION_GRASS = ".animation-grass";
const ANIMATION_CITY = ".animation-city";
const ANIMATION_BG = ".animation-bg";
const ANIMATION_TRAIN = ".animation-train";

const TOTAL_STATIONS = 5;
const mapStationToIndex = {
  "/": 0,
  "/about": 1,
  "/timeline": 2,
  "/faq": 3,
  "/sponsors": 4,
};
const TOTAL_DURATION = 10000;
const END_TO_END_DURATION = 1000;

// TODO: Currently hardcoded to avoid end cut off
const subtractWidth = {
  bg: 960,
  city: 340,
  grass: -1220,
};

// default values given
const metrics = {
  totalSVGWidth: {
    bg: 0,
    city: 0,
    grass: 0,
    train: 0,
  },
  stationToStationDistance: {
    bg: 0,
    city: 0,
    grass: 0,
  },
};

const x = {
  bg: 0,
  city: 0,
  grass: 0,
  train: 0,
};

const animations = () => {
  const endPoints = {
    start: 0,
    end: TOTAL_STATIONS,
  };

  let vector = {
    length: 0,
    clockwise: true,
  };

  const windowLength = window.screen.width;

  const findMetrics = (lengths, trainRef) => {
    x.train = trainRef.getBoundingClientRect().x;
    metrics.totalSVGWidth.train = trainRef.getBoundingClientRect().width;

    console.log("Train reference :: ", trainRef);
    console.log(
      "Dimensions of train ref :: ",
      trainRef.getBoundingClientRect()
    );

    metrics.totalSVGWidth = {
      bg: Math.floor(lengths.bg) - subtractWidth.bg,
      city: Math.floor(lengths.city) - subtractWidth.city,
      grass: Math.floor(lengths.grass) - subtractWidth.grass,
    };
    metrics.stationToStationDistance = {
      bg: Math.floor(metrics.totalSVGWidth.bg / TOTAL_STATIONS),
      city: Math.floor(metrics.totalSVGWidth.city / TOTAL_STATIONS),
      grass: Math.floor(metrics.totalSVGWidth.grass / TOTAL_STATIONS),
    };
  };

  const identifyShortestPath = (current, dest) => {
    endPoints.start = mapStationToIndex[current];
    endPoints.end = mapStationToIndex[dest];

    const distance = endPoints.end - endPoints.start;

    const arc1 = {
      length: Math.abs(distance),
      clockwise: distance >= 0,
    };

    const arc2 = {
      length: TOTAL_STATIONS - Math.abs(distance),
      clockwise: !arc1.clockwise,
    };

    vector = arc1.length <= arc2.length ? arc1 : arc2;
  };

  const animationSequences = () => {
    const distanceToTravel = vector.length;

    const moveLoop = (endDistance) => {
      // console.log("move loop activated running the animation", vector);
      console.log("endDistance", endDistance);

      // ---------------- TIME MANAGEMENT--------------------------
      const fractionTime = (endDistance / distanceToTravel) * TOTAL_DURATION;
      const trainTimeAtEnds = (1 / distanceToTravel) * TOTAL_DURATION;
      const remainingFractionTime =
        TOTAL_DURATION - fractionTime - trainTimeAtEnds;

      // ---------------DISTANCE TO TRAVEL ------------------------
      const backgroundToCurrent = distanceToTravel - endDistance - 1;

      const move = {
        backgroundToEnd: {
          bg:
            endDistance *
            metrics.stationToStationDistance.bg *
            (vector.clockwise ? -1 : 1),
          city:
            endDistance *
            metrics.stationToStationDistance.city *
            (vector.clockwise ? -1 : 1),
          grass:
            endDistance *
            metrics.stationToStationDistance.grass *
            (vector.clockwise ? -1 : 1),
        },
        moveTrainToEnd: (windowLength - x.train) * (vector.clockwise ? 1 : -1),
        // Shift by 4 stations to reach start
        endToEndShift: {
          bg:
            (metrics.totalSVGWidth.bg - metrics.stationToStationDistance.bg) *
            (vector.clockwise ? 1 : -1),
          city:
            (metrics.totalSVGWidth.city -
              metrics.stationToStationDistance.city) *
            (vector.clockwise ? 1 : -1),
          grass:
            (metrics.totalSVGWidth.grass -
              metrics.stationToStationDistance.grass) *
            (vector.clockwise ? 1 : -1),
        },
        backgroundFromOtherEnd: {
          bg:
            backgroundToCurrent *
            metrics.stationToStationDistance.bg *
            (vector.clockwise ? -1 : 1),
          city:
            backgroundToCurrent *
            metrics.stationToStationDistance.city *
            (vector.clockwise ? -1 : 1),
          grass:
            backgroundToCurrent *
            metrics.stationToStationDistance.grass *
            (vector.clockwise ? -1 : 1),
        },
      };

      // ------------------ ANIMATION ----------------------------

      return new Promise((resolve, reject) => {
        anime({
          targets: ANIMATION_BG,
          translateX: [
            {
              value: x.bg + move.backgroundToEnd.bg,
              complete: () => (x.bg += move.backgroundToEnd.bg),
              duration: fractionTime,
              easing: "easeInQuad",
            },
            {
              value: 0,
              duration: trainTimeAtEnds / 2,
              complete: () => console.log(`train left the scene`),
            },
            {
              duration: END_TO_END_DURATION,
              value: x.bg + move.endToEndShift.bg,
              complete: () => (x.bg += move.endToEndShift.bg),
              easing: "easeInOutQuad",
            },
            {
              value: 0,
              duration: trainTimeAtEnds / 2,
              complete: () => console.log(`train entered from other side`),
            },
            {
              value: x.bg + move.backgroundFromOtherEnd.bg,
              complete: () => (x.bg += move.backgroundFromOtherEnd.bg),
              duration: remainingFractionTime,
              easing: "easeOutQuad",
            },
          ],
          complete: () => resolve(),
        });

        anime({
          targets: ANIMATION_TRAIN,
          translateX: [
            {
              value: 0,
              duration: fractionTime,
              complete: () => console.log(`train about to move out`),
            },
            {
              value: x.train + move.moveTrainToEnd,
              duration: trainTimeAtEnds / 2,
              easing: "easeInCubic",
            },
            {
              value: x.train - windowLength - metrics.totalSVGWidth.train,
              duration: END_TO_END_DURATION,
              complete: () =>
                (x.train -= windowLength + metrics.totalSVGWidth.train),
            },
            {
              value: x.train + move.moveTrainToEnd,
              duration: trainTimeAtEnds / 2,
              complete: () => (x.train += move.moveTrainToEnd),
            },
            {
              value: 0,
              duration: remainingFractionTime,
              complete: () => console.log(`1t ${x.train}`),
            },
          ],
          opacity: [
            { value: 1, duration: fractionTime + trainTimeAtEnds / 2 },
            { value: 0, duration: END_TO_END_DURATION },
            { value: 1, duration: remainingFractionTime + trainTimeAtEnds / 2 },
          ],
          changeComplete: () => {
            console.log(`ct ${x.train}`);
          },
        });

        // anime
        //   .timeline({
        //     duration: TOTAL_DURATION,
        //     easing: "easeOutCubic",
        //     complete: () => resolve(),
        //   })
        //   .add({
        //     duration: fractionTime,
        //     begin: () => {
        //       backgroundMovingToEnd.play();
        //       cityMovingToEnd.play();
        //       grassMovingToEnd.play();
        //     },
        //   })
        //   .add({
        //     duration: trainTimeAtEnds / 2,
        //     targets: ".animation-train",
        //     translateX: x.train * 4,
        //   })
        //   .add({
        //     duration: END_TO_END_DURATION,
        //     begin: () => {
        //       shiftBackground.play();
        //       shiftCity.play();
        //       shiftGrass.play();
        //     },
        //   })
        //   .add({
        //     duration: trainTimeAtEnds / 2,
        //     targets: ".animation-train",
        //     translateX: [0, x.train],
        //   })
        //   .add({
        //     duration: remainingFractionTime,
        //     begin: () => {
        //       moveBackground.play();
        //       moveCity.play();
        //       moveGrass.play();
        //     },
        //   });
      });
    };

    const move = () => {
      const distanceToTravel = vector.length;

      console.log("move is triggered", vector, metrics);

      const moveByDistance = {
        bg:
          distanceToTravel *
          metrics.stationToStationDistance.bg *
          (vector.clockwise ? -1 : 1),
        city:
          distanceToTravel *
          metrics.stationToStationDistance.city *
          (vector.clockwise ? -1 : 1),
        grass:
          distanceToTravel *
          metrics.stationToStationDistance.grass *
          (vector.clockwise ? -1 : 1),
      };

      return new Promise((resolve, reject) => {
        anime({
          targets: ANIMATION_BG,
          translateX: x.bg + moveByDistance.bg,
          complete: () => {
            x.bg += moveByDistance.bg;
            console.log(x.bg);
            resolve();
          },
          duration: TOTAL_DURATION,
          easing: "easeInOutCubic",
        });
        anime({
          targets: ANIMATION_CITY,
          translateX: x.city + moveByDistance.city,
          complete: () => (x.city += moveByDistance.city),
          duration: TOTAL_DURATION,
          easing: "easeInOutCubic",
        });
        anime({
          targets: ANIMATION_GRASS,
          translateX: x.grass + moveByDistance.grass,
          complete: () => (x.grass += moveByDistance.grass),
          duration: TOTAL_DURATION,
          easing: "easeInOutCubic",
        });
      });
    };

    return { move, moveLoop };
  };

  const performAnimation = () => {
    const distanceToTravel = vector.length;
    const { move, moveLoop } = animationSequences();
    const endDistance = vector.clockwise
      ? TOTAL_STATIONS - endPoints.start - 1
      : endPoints.start;
    return distanceToTravel > endDistance ? moveLoop(endDistance) : move();
  };

  const trainAnimation = (current, dest) => {
    identifyShortestPath(current, dest);
    return performAnimation();
  };

  return { trainAnimation, findMetrics };
};

export { animations };
