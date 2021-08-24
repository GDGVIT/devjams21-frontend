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

const TOTAL_DURATION = 5000;
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

  // const setValues = () => {
  //   anime.set(ANIMATION_BG, {
  //     translateX: () => x.bg,
  //   });
  //   anime.set(ANIMATION_CITY, {
  //     translateX: () => x.city,
  //   });
  //   anime.set(ANIMATION_GRASS, {
  //     translateX: () => x.grass,
  //   });
  // };

  const animationSequences = () => {
    const distanceToTravel = vector.length;

    const moveLoop = (endDistance) => {
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
        moveTrainToEnd: windowLength * (vector.clockwise ? 1 : -1),
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

      const moveToEnd = async () => {
        const moveBgToEnd = anime({
          targets: ANIMATION_BG,
          translateX: [x.bg, x.bg + move.backgroundToEnd.bg],
          complete: () => (x.bg += move.backgroundToEnd.bg),
          duration: fractionTime,
          easing: "easeInQuad",
        }).finished;

        const moveCityToEnd = anime({
          targets: ANIMATION_CITY,
          translateX: [x.city, x.city + move.backgroundToEnd.city],
          complete: () => (x.city += move.backgroundToEnd.city),
          duration: fractionTime,
          easing: "easeInQuad",
        }).finished;

        const moveGrassToEnd = anime({
          targets: ANIMATION_GRASS,
          translateX: [x.grass, x.grass + move.backgroundToEnd.grass],
          complete: () => (x.grass += move.backgroundToEnd.grass),
          duration: fractionTime,
          easing: "easeInQuad",
        }).finished;

        await Promise.all([moveBgToEnd, moveCityToEnd, moveGrassToEnd]);
      };

      const shiftThingsToOtherSide = async () => {
        const bgShift = anime({
          targets: ANIMATION_BG,
          translateX: move.endToEndShift.bg,
          easing: "easeInOutQuad",
          duration: END_TO_END_DURATION,
        }).finished;

        const cityShift = anime({
          targets: ANIMATION_CITY,
          translateX: move.endToEndShift.city,
          easing: "easeInOutQuad",
          duration: END_TO_END_DURATION,
        }).finished;

        const grassShift = anime({
          targets: ANIMATION_GRASS,
          translateX: move.endToEndShift.grass,
          easing: "easeInOutQuad",
          duration: END_TO_END_DURATION,
        }).finished;

        await Promise.all([bgShift, cityShift, grassShift]);
      };

      return new Promise((resolve, reject) => {
        moveToEnd()
          .then(() => {
            anime.set(ANIMATION_TRAIN, {
              translateX: () => {
                if (windowLength > 768) return 320;
                return 0;
              },
            });

            const runTrainToEnd = anime({
              targets: ANIMATION_TRAIN,
              translateX: x.train + move.moveTrainToEnd,
              duration: trainTimeAtEnds / 2,
              complete: () => (x.train += x.train + move.moveTrainToEnd),
              easing: "easeOutQuad",
            }).finished;

            return runTrainToEnd;
          })
          .then(() => {
            shiftThingsToOtherSide()
              .then(() => {
                // anime.set(ANIMATION_TRAIN, {
                //   translateX: () =>
                //     2 * move.moveTrainToEnd * (vector.clockwise ? 1 : -1),
                // });
                anime.set(ANIMATION_TRAIN, {
                  translateX: () =>
                    2 * windowLength * (vector.clockwise ? -1 : 1),
                });

                x.train += 2 * windowLength * (vector.clockwise ? -1 : 1);

                const runTrainFromOtherEnd = anime({
                  targets: ANIMATION_TRAIN,
                  duration: trainTimeAtEnds / 2,
                  easing: "easeOutQuad",
                  translateX: () => [x.train, metrics.totalSVGWidth.train / 2],
                }).finished;

                return runTrainFromOtherEnd;
              })
              .then(() => {
                resolve();
              });
          });
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
            resolve();
          },
          duration: TOTAL_DURATION,
          easing: "easeInOutQuad",
        });
        anime({
          targets: ANIMATION_CITY,
          translateX: x.city + moveByDistance.city,
          complete: () => (x.city += moveByDistance.city),
          duration: TOTAL_DURATION,
          easing: "easeInOutQuad",
        });
        anime({
          targets: ANIMATION_GRASS,
          translateX: x.grass + moveByDistance.grass,
          complete: () => (x.grass += moveByDistance.grass),
          duration: TOTAL_DURATION,
          easing: "easeInOutQuad",
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

  const identifyCurrentLocation = (current) => {
    const translateBy = mapStationToIndex[current];

    if (x.bg !== translateBy * metrics.stationToStationDistance.bg) {
      return new Promise((resolve, reject) => {
        anime({
          targets: ANIMATION_BG,
          translateX: [
            x.bg,
            x.bg + translateBy * metrics.stationToStationDistance.bg * -1,
          ],
          duration: 500,
          complete: () => {
            x.bg += translateBy * metrics.stationToStationDistance.bg * -1;
            resolve();
          },
          easing: "easeInOutQuad",
        });
        anime({
          targets: ANIMATION_CITY,
          translateX: [
            x.city,
            x.city + translateBy * metrics.stationToStationDistance.city * -1,
          ],
          duration: 500,
          complete: () => {
            x.city += translateBy * metrics.stationToStationDistance.city * -1;
          },
          easing: "easeInOutQuad",
        });
        anime({
          targets: ANIMATION_GRASS,
          translateX: [
            x.grass,
            x.grass + translateBy * metrics.stationToStationDistance.grass * -1,
          ],
          duration: 500,
          complete: () => {
            x.grass +=
              translateBy * metrics.stationToStationDistance.grass * -1;
          },
          easing: "easeInOutQuad",
        });
      });
    }
    console.log("current", current);
  };

  const trainAnimation = (current, dest) => {
    identifyShortestPath(current, dest);
    return performAnimation(current);
  };

  return { trainAnimation, findMetrics, identifyCurrentLocation };
};

export { animations };
