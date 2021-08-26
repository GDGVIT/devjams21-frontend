import anime from 'animejs/lib/anime.es'

const ANIMATION_GRASS = '.animation-grass'
const ANIMATION_CITY = '.animation-city'
const ANIMATION_BG = '.animation-bg'
const ANIMATION_TRAIN = '.animation-train'

const TOTAL_STATIONS = 5
const mapStationToIndex = {
  '/': 0,
  '/about': 1,
  '/timeline': 2,
  '/faq': 3,
  '/sponsors': 4
}

const TOTAL_DURATION = 5000
const END_TO_END_DURATION = 1000
const TRAIN_TIME_AT_ENDS = 3000
const TO_LOCATION = 500

const subtractWidth = {
  bg: 960,
  city: 340,
  grass: -1220,
  train: -128,
  trainPos: 64
}

// default values given
const metrics = {
  totalSVGWidth: {
    bg: 0,
    city: 0,
    grass: 0,
    train: 0
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
  train: 0
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
    x.train = lengths.trainPos - subtractWidth.trainPos

    metrics.totalSVGWidth = {
      bg: lengths.bg - subtractWidth.bg,
      city: lengths.city - subtractWidth.city,
      grass: lengths.grass - subtractWidth.grass,
      train: lengths.train - subtractWidth.train
    }
    metrics.stationToStationDistance = {
      bg: metrics.totalSVGWidth.bg / TOTAL_STATIONS,
      city: metrics.totalSVGWidth.city / TOTAL_STATIONS,
      grass: metrics.totalSVGWidth.grass / TOTAL_STATIONS
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
      // ---------------- TIME MANAGEMENT--------------------------
      const fractionTime = (endDistance / distanceToTravel) * TOTAL_DURATION
      const remainingFractionTime = TOTAL_DURATION - fractionTime

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
          (vector.clockwise
            ? windowLength / 2 + metrics.totalSVGWidth.train / 2
            : x.train + metrics.totalSVGWidth.train) *
          (vector.clockwise ? 1 : -1),
        moveTrainFromEnd:
          (windowLength / 2 +
            metrics.totalSVGWidth.train / 2 +
            subtractWidth.trainPos * (vector.clockwise ? 0 : 1)) *
          (vector.clockwise ? 1 : -1),
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
          train:
            (metrics.totalSVGWidth.train + windowLength) *
            (vector.clockwise ? -1 : 1)
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
            (vector.clockwise ? -1 : 1)
        }
      }

      // ------------------ ANIMATION ----------------------------

      const moveToEnd = async () => {
        if (endDistance) {
          const moveBgToEnd = anime({
            targets: ANIMATION_BG,
            translateX: [x.bg, x.bg + move.backgroundToEnd.bg],
            complete: () => {
              x.bg += move.backgroundToEnd.bg
            },
            duration: fractionTime,
            easing: 'easeInQuad'
          }).finished

          const moveCityToEnd = anime({
            targets: ANIMATION_CITY,
            translateX: [x.city, x.city + move.backgroundToEnd.city],
            complete: () => (x.city += move.backgroundToEnd.city),
            duration: fractionTime,
            easing: 'easeInQuad'
          }).finished

          const moveGrassToEnd = anime({
            targets: ANIMATION_GRASS,
            translateX: [x.grass, x.grass + move.backgroundToEnd.grass],
            complete: () => (x.grass += move.backgroundToEnd.grass),
            duration: fractionTime,
            easing: 'easeInQuad'
          }).finished

          await Promise.all([moveBgToEnd, moveCityToEnd, moveGrassToEnd])
        }
      }

      const shiftThingsToOtherSide = async () => {
        const bgShift = anime({
          targets: ANIMATION_BG,
          translateX: [x.bg, x.bg + move.endToEndShift.bg],
          complete: () => (x.bg += move.endToEndShift.bg),
          easing: 'easeInOutQuad',
          duration: END_TO_END_DURATION
        }).finished

        const cityShift = anime({
          targets: ANIMATION_CITY,
          translateX: [x.city, x.city + move.endToEndShift.city],
          complete: () => (x.city += move.endToEndShift.city),
          easing: 'easeInOutQuad',
          duration: END_TO_END_DURATION
        }).finished

        const grassShift = anime({
          targets: ANIMATION_GRASS,
          translateX: [x.grass, x.grass + move.endToEndShift.grass],
          complete: () => (x.grass += move.endToEndShift.grass),
          easing: 'easeInOutQuad',
          duration: END_TO_END_DURATION
        }).finished

        await Promise.all([bgShift, cityShift, grassShift])
      }

      const moveFromOtherEnd = async () => {
        if (backgroundToCurrent) {
          const moveBgFromEnd = anime({
            targets: ANIMATION_BG,
            easing: 'easeOutQuad',
            translateX: [x.bg, x.bg + move.backgroundFromOtherEnd.bg],
            complete: () => (x.bg += move.backgroundFromOtherEnd.bg),
            duration: remainingFractionTime
          }).finished
          const moveCityFromEnd = anime({
            targets: ANIMATION_CITY,
            easing: 'easeOutQuad',
            translateX: [x.city, x.city + move.backgroundFromOtherEnd.city],
            complete: () => (x.city += move.backgroundFromOtherEnd.city),
            duration: remainingFractionTime
          }).finished
          const moveGrassFromEnd = anime({
            targets: ANIMATION_GRASS,
            easing: 'easeOutQuad',
            translateX: [x.grass, x.grass + move.backgroundFromOtherEnd.grass],
            complete: () => (x.grass += move.backgroundFromOtherEnd.grass),
            duration: remainingFractionTime
          }).finished

          await Promise.all([moveBgFromEnd, moveCityFromEnd, moveGrassFromEnd])
        }
      }

      return new Promise((resolve, reject) => {
        moveToEnd()
          .then(() => {
            anime.set(ANIMATION_TRAIN, {
              translateX: () => {
                if (windowLength > 768) {
                  return 320
                }
                return 0
              }
            })

            const runTrainToEnd = anime({
              targets: ANIMATION_TRAIN,
              translateX: [x.train, x.train + move.moveTrainToEnd],
              duration: TRAIN_TIME_AT_ENDS / 2,
              complete: () => (x.train += move.moveTrainToEnd),
              easing: 'linear'
            }).finished

            return runTrainToEnd
          })
          .then(() => {
            shiftThingsToOtherSide()
              .then(() => {
                anime.set(ANIMATION_TRAIN, {
                  translateX: () => {
                    x.train += move.endToEndShift.train
                    return x.train
                  }
                })

                const runTrainFromOtherEnd = anime({
                  targets: ANIMATION_TRAIN,
                  duration: TRAIN_TIME_AT_ENDS / 2,
                  easing: 'easeOutQuad',
                  translateX: () => [x.train, x.train + move.moveTrainFromEnd],
                  complete: () => (x.train += move.moveTrainFromEnd)
                }).finished

                return runTrainFromOtherEnd
              })
              .then(() => {
                moveFromOtherEnd().then(() => resolve())
              })
          })
      })
    }

    const move = () => {
      const distanceToTravel = vector.length

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

      return new Promise((resolve, reject) => {
        anime({
          targets: ANIMATION_BG,
          translateX: [x.bg, x.bg + moveByDistance.bg],
          complete: () => {
            x.bg += moveByDistance.bg
            resolve()
          },
          duration: TOTAL_DURATION,
          easing: 'easeInOutQuad'
        })
        anime({
          targets: ANIMATION_CITY,
          translateX: [x.city, x.city + moveByDistance.city],
          complete: () => (x.city += moveByDistance.city),
          duration: TOTAL_DURATION,
          easing: 'easeInOutQuad'
        })
        anime({
          targets: ANIMATION_GRASS,
          translateX: [x.grass, x.grass + moveByDistance.grass],
          complete: () => (x.grass += moveByDistance.grass),
          duration: TOTAL_DURATION,
          easing: 'easeInOutQuad'
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

  const identifyCurrentLocation = async (current) => {
    const translateBy = mapStationToIndex[current]

    const identifyBg = anime({
      targets: ANIMATION_BG,
      translateX: [
        x.bg,
        x.bg + translateBy * metrics.stationToStationDistance.bg * -1
      ],
      duration: TO_LOCATION,
      complete: () => {
        x.bg += translateBy * metrics.stationToStationDistance.bg * -1
      },
      easing: 'easeInOutQuad'
    }).finished

    const identifyCity = anime({
      targets: ANIMATION_CITY,
      translateX: [
        x.city,
        x.city + translateBy * metrics.stationToStationDistance.city * -1
      ],
      duration: TO_LOCATION,
      complete: () => {
        x.city += translateBy * metrics.stationToStationDistance.city * -1
      },
      easing: 'easeInOutQuad'
    }).finished

    const identifyGrass = anime({
      targets: ANIMATION_GRASS,
      translateX: [
        x.grass,
        x.grass + translateBy * metrics.stationToStationDistance.grass * -1
      ],
      duration: TO_LOCATION,
      complete: () => {
        x.grass += translateBy * metrics.stationToStationDistance.grass * -1
      },
      easing: 'easeInOutQuad'
    }).finished

    await Promise.all([identifyBg, identifyCity, identifyGrass])
  }

  const trainAnimation = (current, dest) => {
    identifyShortestPath(current, dest)
    return performAnimation(current)
  }

  return { trainAnimation, findMetrics, identifyCurrentLocation }
}

export { animations }
