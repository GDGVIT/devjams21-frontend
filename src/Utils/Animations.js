import anime from 'animejs/lib/anime.es'

const ANIMATION_GRASS = '.animation-grass'
const ANIMATION_CITY = '.animation-city'
const ANIMATION_BG = '.animation-bg'

const TOTAL_STATIONS = 5
const mapStationToIndex = {
  '/': 0,
  '/about': 1,
  '/timeline': 2,
  '/faq': 3,
  '/sponsors': 4
}
const TOTAL_DURATION = 3000
const END_TO_END_DURATION = 100

// default values given
const metrics = {
  totalSVGWidth: {
    bg: 0,
    city: 0,
    grass: 0
  },
  stationToStationDistance: {
    bg: 0,
    city: 0,
    grass: 0
  }
}

const x = {
  bg: 0,
  city: 0,
  grass: 0,
  train: window.screen.width / 2
}

const animations = () => {
  const endPoints = {
    start: 0,
    end: TOTAL_STATIONS
  }

  let vector = {
    length: 0,
    clockwise: true
  }

  const windowLength = window.screen.width

  const findMetrics = (lengths) => {
    metrics.totalSVGWidth = {
      bg: lengths.bg,
      city: lengths.city,
      grass: lengths.grass
    }
    metrics.stationToStationDistance = {
      bg: Math.abs(metrics.totalSVGWidth.bg / TOTAL_STATIONS),
      city: Math.abs(metrics.totalSVGWidth.city / TOTAL_STATIONS),
      grass: Math.abs(metrics.totalSVGWidth.grass / TOTAL_STATIONS)
    }
  }

  const identifyShortestPath = (current, dest) => {
    endPoints.start = mapStationToIndex[current]
    endPoints.end = mapStationToIndex[dest]

    const distance = endPoints.end - endPoints.start

    const arc1 = {
      length: Math.abs(distance),
      clockwise: distance >= 0
    }

    const arc2 = {
      length: TOTAL_STATIONS - Math.abs(distance),
      clockwise: !arc1.clockwise
    }

    vector = arc1.length <= arc2.length ? arc1 : arc2
  }

  const animationSequences = () => {
    const distanceToTravel = vector.length

    const moveLoop = (endDistance) => {
      console.log('move loop activated running the animation', vector)

      // ---------------- TIME MANAGEMENT--------------------------
      const fractionTime = (endDistance / distanceToTravel) * TOTAL_DURATION
      const trainTimeAtEnds = (1 / distanceToTravel) * TOTAL_DURATION
      const remainingFractionTime =
        TOTAL_DURATION - fractionTime - trainTimeAtEnds

      // ---------------DISTANCE TO TRAVEL ------------------------
      const backgroundToCurrent = distanceToTravel - endDistance - 1

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
            (vector.clockwise ? -1 : 1)
        },
        moveTrainToEnd:
          ((1 / 2) * windowLength + 100) * (vector.clockwise ? 1 : -1),
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
            (vector.clockwise ? 1 : -1)
        },
        backgroundFromOtherEnd: {
          bg:
            backgroundToCurrent *
            metrics.stationToStationDistance.bg *
            (vector.clockwise ? 1 : -1),
          city:
            backgroundToCurrent *
            metrics.stationToStationDistance.city *
            (vector.clockwise ? 1 : -1),
          grass:
            backgroundToCurrent *
            metrics.stationToStationDistance.grass *
            (vector.clockwise ? 1 : -1)
        }
      }

      // ------------------ ANIMATION ----------------------------

      const backgroundMovingToEnd = anime({
        targets: ANIMATION_BG,
        translateX: [x.bg, x.bg + move.backgroundToEnd.bg],
        complete: () => (x.bg += move.backgroundToEnd.bg),
        duration: fractionTime
      })

      const cityMovingToEnd = anime({
        targets: ANIMATION_CITY,
        translateX: [x.city, x.city + move.backgroundToEnd.city],
        complete: () => (x.city += move.backgroundToEnd.city),
        duration: fractionTime
      })

      const grassMovingToEnd = anime({
        targets: ANIMATION_GRASS,
        translateX: [x.grass, x.grass + move.backgroundToEnd.grass],
        complete: () => (x.grass += move.backgroundToEnd.grass),
        duration: fractionTime
      })

      const shiftBackground = anime({
        targets: ANIMATION_BG,
        duration: END_TO_END_DURATION,
        translateX: [x.bg, x.bg + move.endToEndShift.bg],
        complete: () => (x.bg += move.endToEndShift.bg)
      })

      const shiftCity = anime({
        targets: ANIMATION_CITY,
        duration: END_TO_END_DURATION,
        translateX: [x.city, x.city + move.endToEndShift.city],
        complete: () => (x.city += move.endToEndShift.city)
      })

      const shiftGrass = anime({
        targets: ANIMATION_GRASS,
        duration: END_TO_END_DURATION,
        translateX: [x.grass, x.grass + move.endToEndShift.grass],
        complete: () => (x.grass += move.endToEndShift.grass)
      })

      const moveBackground = anime({
        targets: ANIMATION_BG,
        translateX: [x.bg, x.bg + move.backgroundFromOtherEnd.bg],
        complete: () => (x.bg += x.bg + move.backgroundFromOtherEnd.bg),
        duration: remainingFractionTime
      })

      const moveCity = anime({
        targets: ANIMATION_CITY,
        translateX: [x.city, x.city + move.backgroundFromOtherEnd.city],
        complete: () => (x.city += x.city + move.backgroundFromOtherEnd.city),
        duration: remainingFractionTime
      })

      const moveGrass = anime({
        targets: ANIMATION_GRASS,
        translateX: [x.grass, x.grass + move.backgroundFromOtherEnd.grass],
        complete: () =>
          (x.grass += x.grass + move.backgroundFromOtherEnd.grass),
        duration: remainingFractionTime
      })

      return new Promise((resolve, reject) => {
        anime
          .timeline({
            duration: TOTAL_DURATION,
            easing: 'easeOutCubic',
            complete: () => resolve()
          })
          .add({
            duration: fractionTime,
            begin: () => {
              backgroundMovingToEnd.play()
              cityMovingToEnd.play()
              grassMovingToEnd.play()
            }
          })
          .add({
            duration: trainTimeAtEnds / 2,
            targets: '.animation-train',
            translateX: x.train * 4
          })
          .add({
            duration: END_TO_END_DURATION,
            begin: () => {
              shiftBackground.play()
              shiftCity.play()
              shiftGrass.play()
            }
          })
          .add({
            duration: trainTimeAtEnds / 2,
            targets: '.animation-train',
            translateX: [0, x.train]
          })
          .add({
            duration: remainingFractionTime,
            begin: () => {
              moveBackground.play()
              moveCity.play()
              moveGrass.play()
            }
          })
      })
    }

    const move = () => {
      const distanceToTravel = vector.length

      console.log('move is triggered', vector, metrics)

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
          (vector.clockwise ? -1 : 1)
      }

      // console.log("move by distance", x, moveByDistance);

      return new Promise((resolve, reject) => {
        anime({
          targets: ANIMATION_BG,
          translateX: x.bg + moveByDistance.bg,
          complete: () => {
            x.bg += moveByDistance.bg
            console.log(x.bg)
            resolve()
          },
          duration: TOTAL_DURATION,
          easing: 'easeInOutCubic'
        })
        anime({
          targets: ANIMATION_CITY,
          translateX: x.city + moveByDistance.city,
          complete: () => (x.city += moveByDistance.city),
          duration: TOTAL_DURATION,
          easing: 'easeInOutCubic'
        })
        anime({
          targets: ANIMATION_GRASS,
          translateX: x.grass + moveByDistance.grass,
          complete: () => (x.grass += moveByDistance.grass),
          duration: TOTAL_DURATION,
          easing: 'easeInOutCubic'
        })
      })
    }

    return { move, moveLoop }
  }

  const performAnimation = () => {
    const distanceToTravel = vector.length
    const { move, moveLoop } = animationSequences()
    const endDistance = vector.clockwise
      ? TOTAL_STATIONS - endPoints.start - 1
      : endPoints.start
    return distanceToTravel > endDistance ? moveLoop(endDistance) : move()
  }

  const trainAnimation = (current, dest) => {
    identifyShortestPath(current, dest)
    return performAnimation()
  }

  return { trainAnimation, findMetrics }
}

export { animations }
