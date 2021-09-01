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
const ANIMATION_SET3 = {
  bg: '.animation-bg-3',
  city: '.animation-city-3',
  grass: '.animation-grass-3'
}

const mapStationToIndex = {
  '/': 0,
  '/about': 1,
  '/timeline': 2,
  '/faq': 3,
  '/sponsors': 4
}
const TOTAL_STATIONS = 5
const TOTAL_DURATION = 3000
const midPoint = TOTAL_STATIONS / 2

// hardcoded value
const subtractTrainPos = 64

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
  },
  set3: {
    bg: 0,
    city: 0,
    grass: 0
  }
}

let setTurnToShift = 1
let distanceToTravel = 0

const endPoints = {
  start: 0,
  end: TOTAL_STATIONS
}

const translateSet = (set) => {
  if (set === 1) {
    pos.set1.bg += metrics.totalSVGWidth.bg * 3
    pos.set1.city += metrics.totalSVGWidth.city * 3
    pos.set1.grass += metrics.totalSVGWidth.grass * 3
  } else if (set === 2) {
    pos.set2.bg += metrics.totalSVGWidth.bg * 3
    pos.set2.city += metrics.totalSVGWidth.city * 3
    pos.set2.grass += metrics.totalSVGWidth.grass * 3
  } else {
    pos.set3.bg += metrics.totalSVGWidth.bg * 3
    pos.set3.city += metrics.totalSVGWidth.city * 3
    pos.set3.grass += metrics.totalSVGWidth.grass * 3
  }
}

const calculateOffset = () => {
  const offset =
    window.innerWidth / 2 - metrics.stationToStationDistance.city / 2

  pos.set1.bg += offset
  pos.set1.city += offset
  pos.set1.grass += offset
  pos.set2.bg += offset
  pos.set2.city += offset
  pos.set2.grass += offset
  pos.set3.bg += offset
  pos.set3.city += offset
  pos.set3.grass += offset
}

const initialTranslation = () => {
  pos.set1.bg -= metrics.totalSVGWidth.bg
  pos.set1.city -= metrics.totalSVGWidth.city
  pos.set1.grass -= metrics.totalSVGWidth.grass
  pos.set3.bg += metrics.totalSVGWidth.bg
  pos.set3.city += metrics.totalSVGWidth.city
  pos.set3.grass += metrics.totalSVGWidth.grass
}

const setBeforeAnimating = () => {
  anime.set(ANIMATION_SET1.bg, { translateX: () => pos.set1.bg })
  anime.set(ANIMATION_SET2.bg, { translateX: () => pos.set2.bg })
  anime.set(ANIMATION_SET3.bg, { translateX: () => pos.set3.bg })
  anime.set(ANIMATION_SET1.city, { translateX: () => pos.set1.city })
  anime.set(ANIMATION_SET2.city, { translateX: () => pos.set2.city })
  anime.set(ANIMATION_SET3.city, { translateX: () => pos.set3.city })
  anime.set(ANIMATION_SET1.grass, { translateX: () => pos.set1.grass })
  anime.set(ANIMATION_SET2.grass, { translateX: () => pos.set2.grass })
  anime.set(ANIMATION_SET3.grass, { translateX: () => pos.set3.grass })
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
  calculateOffset()
  setBeforeAnimating()
}

const move = async () => {
  if (!distanceToTravel) distanceToTravel = endPoints.end

  if (endPoints.end === 0) return

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

  const bg3Shift = anime({
    targets: ANIMATION_SET3.bg,
    translateX: [pos.set3.bg, pos.set3.bg + moveByDistance.bg],
    complete: () => {
      pos.set3.bg += moveByDistance.bg
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

  const city3Shift = anime({
    targets: ANIMATION_SET3.city,
    translateX: [pos.set3.city, pos.set3.city + moveByDistance.city],
    complete: () => (pos.set3.city += moveByDistance.city),
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

  const grass3Shift = anime({
    targets: ANIMATION_SET3.grass,
    translateX: [pos.set3.grass, pos.set3.grass + moveByDistance.grass],
    complete: () => (pos.set3.grass += moveByDistance.grass),
    duration: TOTAL_DURATION,
    easing: 'easeInOutQuad'
  }).finished

  await Promise.all([
    bg1Shift,
    bg2Shift,
    bg3Shift,
    city1Shift,
    city2Shift,
    city3Shift,
    grass1Shift,
    grass2Shift,
    grass3Shift
  ])
}

const trainAnimation = (current, dest) => {
  endPoints.start = mapStationToIndex[current]
  endPoints.end = mapStationToIndex[dest]

  console.log('start point and end points are', endPoints.start, endPoints.end)

  const distance = endPoints.end - endPoints.start

  if (endPoints.end < endPoints.start) {
    distanceToTravel = TOTAL_STATIONS - Math.abs(distance)
  } else distanceToTravel = Math.abs(distance)

  return new Promise((resolve, reject) => {
    move().then(() => {
      const middleSet = (setTurnToShift % 3) + 1

      x.bg = Math.abs(pos[`set${middleSet}`].bg)
      x.city = Math.abs(pos[`set${middleSet}`].city)
      x.grass = Math.abs(pos[`set${middleSet}`].grass)

      if (x.bg >= midPoint * metrics.stationToStationDistance.bg) {
        translateSet(setTurnToShift)

        setTurnToShift = middleSet

        x.bg -= metrics.totalSVGWidth.bg
        x.city -= metrics.totalSVGWidth.city
        x.grass -= metrics.totalSVGWidth.grass
      }

      resolve()
    })
  })
}

const reachInitialStation = async (current) => {
  distanceToTravel = mapStationToIndex[current]
  await move()
}

export { trainAnimation, findMetrics, reachInitialStation }
