import anime from 'animejs/lib/anime.es'

const ANIMATION_SET1 = {
  bg: '.animation-bg-1',
  city: '.animation-city-1',
  grass: '.animation-grass-1'
}
const ANIMATION_SET2 = {
  bg: '.animation-bg-2',
  city: '.animation-city-2',
  grass: '.animation-grass-2'
}

const TOTAL_STATIONS = 5
const mapStationToIndex = {
  '/': 0,
  '/about': 1,
  '/timeline': 2,
  '/faq': 3,
  '/sponsors': 4
}

const TOTAL_DURATION = 6000

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

const pos = {
  set1: {
    bg: 0,
    city: 0,
    grass: 0
  },
  set2: {
    bg: 0,
    city: 0,
    grass: 0
  }
}

// hardcoded value
const subtractTrainPos = 64

const animations = () => {
  const endPoints = {
    start: 0,
    end: TOTAL_STATIONS
  }

  let distanceToTravel = 0

  const translateSet = (set) => {
    if (set === 1) {
      pos.set1.bg += metrics.totalSVGWidth.bg * 2
      pos.set1.city += metrics.totalSVGWidth.city * 2
      pos.set1.grass += metrics.totalSVGWidth.grass * 2
    } else {
      pos.set2.bg += metrics.totalSVGWidth.bg * 2
      pos.set2.city += metrics.totalSVGWidth.city * 2
      pos.set2.grass += metrics.totalSVGWidth.grass * 2
    }
  }

  const initialTranslation = async () => {
    pos.set2.bg += metrics.totalSVGWidth.bg
    pos.set2.city += metrics.totalSVGWidth.city
    pos.set2.grass += metrics.totalSVGWidth.grass
  }

  const findMetrics = (lengths) => {
    x.train = lengths.trainPos

    metrics.totalSVGWidth = {
      bg: Math.floor(lengths.bg),
      city: Math.floor(lengths.city),
      grass: Math.floor(lengths.grass),
      train: lengths.train - subtractTrainPos
    }

    metrics.stationToStationDistance = {
      bg: metrics.totalSVGWidth.bg / TOTAL_STATIONS,
      city: metrics.totalSVGWidth.city / TOTAL_STATIONS,
      grass: metrics.totalSVGWidth.grass / TOTAL_STATIONS
    }

    initialTranslation()
  }

  const setBeforeAnimating = () => {
    anime.set(ANIMATION_SET1.bg, { translateX: () => pos.set1.bg })
    anime.set(ANIMATION_SET2.bg, { translateX: () => pos.set2.bg })
    anime.set(ANIMATION_SET1.city, { translateX: () => pos.set1.city })
    anime.set(ANIMATION_SET2.city, { translateX: () => pos.set2.city })
    anime.set(ANIMATION_SET1.grass, { translateX: () => pos.set1.grass })
    anime.set(ANIMATION_SET2.grass, { translateX: () => pos.set2.grass })
  }

  const animationSequences = () => {
    const move = async () => {
      const moveByDistance = {
        bg: distanceToTravel * metrics.stationToStationDistance.bg * -1,
        city: distanceToTravel * metrics.stationToStationDistance.city * -1,
        grass: distanceToTravel * metrics.stationToStationDistance.grass * -1
      }
      setBeforeAnimating()

      const bg1Shift = anime({
        targets: ANIMATION_SET1.bg,
        translateX: [pos.set1.bg, pos.set1.bg + moveByDistance.bg],
        complete: () => {
          pos.set1.bg += moveByDistance.bg
        },
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      const bg2Shift = anime({
        targets: ANIMATION_SET2.bg,
        translateX: [pos.set2.bg, pos.set2.bg + moveByDistance.bg],
        complete: () => {
          pos.set2.bg += moveByDistance.bg
        },
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      const city1Shift = anime({
        targets: ANIMATION_SET1.city,
        translateX: [pos.set1.city, pos.set1.city + moveByDistance.city],
        complete: () => (pos.set1.city += moveByDistance.city),
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      const city2Shift = anime({
        targets: ANIMATION_SET2.city,
        translateX: [pos.set2.city, pos.set2.city + moveByDistance.city],
        complete: () => (pos.set2.city += moveByDistance.city),
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      const grass1Shift = anime({
        targets: ANIMATION_SET1.grass,
        translateX: [pos.set1.grass, pos.set1.grass + moveByDistance.grass],
        complete: () => (pos.set1.grass += moveByDistance.grass),
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      const grass2Shift = anime({
        targets: ANIMATION_SET2.grass,
        translateX: [pos.set2.grass, pos.set2.grass + moveByDistance.grass],
        complete: () => (pos.set2.grass += moveByDistance.grass),
        duration: TOTAL_DURATION,
        easing: 'easeInOutQuad'
      }).finished

      await Promise.all([
        bg1Shift,
        bg2Shift,
        city1Shift,
        city2Shift,
        grass1Shift,
        grass2Shift
      ])
    }

    return { move }
  }

  const identifyCurrentLocation = async (current) => {
    distanceToTravel = mapStationToIndex[current]
    const { move } = animationSequences()
    await move()
  }

  const trainAnimation = (current, dest) => {
    const { move } = animationSequences()

    endPoints.start = mapStationToIndex[current]
    endPoints.end = mapStationToIndex[dest]

    const distance = endPoints.end - endPoints.start

    if (endPoints.end < endPoints.start) {
      distanceToTravel = TOTAL_STATIONS - Math.abs(distance)
    } else distanceToTravel = Math.abs(distance)

    return new Promise((resolve, reject) => {
      move().then(() => {
        x.bg = Math.abs(Math.min(pos.set1.bg, pos.set2.bg))
        x.city = Math.abs(Math.min(pos.set1.city, pos.set2.city))
        x.grass = Math.abs(Math.min(pos.set1.grass, pos.set2.grass))

        if (
          x.bg >=
          metrics.totalSVGWidth.bg + metrics.stationToStationDistance.bg
        ) {
          // set 1 or 2 to shift
          const set = pos.set1.bg < pos.set2.bg ? 1 : 2

          translateSet(set)

          x.bg -= metrics.stationToStationDistance.bg
          x.city -= metrics.stationToStationDistance.city
          x.grass -= metrics.stationToStationDistance.grass
        }

        resolve()
      })
    })
  }

  return { trainAnimation, findMetrics, identifyCurrentLocation }
}

export { animations }
