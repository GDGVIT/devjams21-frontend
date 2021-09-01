import { useEffect, useRef } from 'react'

// Light
import { ReactComponent as Sun } from '../Assets/TrainAnimations/Day/Sun.svg'
import { ReactComponent as DayBg } from '../Assets/TrainAnimations/Day/DayBg.svg'
import { ReactComponent as DayCityAndLightHouse } from '../Assets/TrainAnimations/Day/CityLightHouse.svg'
import { ReactComponent as DayGrassAndTrees } from '../Assets/TrainAnimations/Day/GrassAndTrees.svg'

// Dark
import { ReactComponent as Moon } from '../Assets/TrainAnimations/Night/Moon.svg'
import { ReactComponent as NightBg } from '../Assets/TrainAnimations/Night/NightBg.svg'
import { ReactComponent as NightCityAndLightHouse } from '../Assets/TrainAnimations/Night/CityLighthouse.svg'
import { ReactComponent as NightGrassAndTrees } from '../Assets/TrainAnimations/Night/GrassAndTrees.svg'

import { ReactComponent as Train } from '../Assets/TrainAnimations/Train.svg'
import { findMetrics } from '../Utils/Animations'

const Animation = ({ darkTheme, setMetrics }) => {
  const bgRef1 = useRef(null)
  const cityRef1 = useRef(null)
  const grassRef1 = useRef(null)
  const trainRef = useRef(null)

  useEffect(() => {
    const lengths = {
      bg: bgRef1.current.getBoundingClientRect().width,
      city: cityRef1.current.getBoundingClientRect().width,
      grass: grassRef1.current.getBoundingClientRect().width,
      trainPos: trainRef.current.getBoundingClientRect().x,
      train: trainRef.current.getBoundingClientRect().width
    }
    findMetrics(lengths)
    setMetrics(lengths)
  }, [setMetrics])

  useEffect(() => {
    const recalc = () => {
      window.location.reload()
    }
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [])

  return (
    <div className='h-screen w-screen fixed overflow-hidden'>
      {darkTheme && ( // dark
        <div>
          <Moon className='-z-60 h-screen animate-obj' />
          <NightBg ref={bgRef1} className='animate-obj animation-bg-1 -z-50' />
          <NightBg className='animate-obj animation-bg-2 -z-50' />
          <NightBg className='animate-obj animation-bg-3 -z-50' />
          <NightCityAndLightHouse
            ref={cityRef1}
            className='animate-obj animation-city-1 -z-40'
          />
          <NightCityAndLightHouse className='animate-obj animation-city-2 -z-40' />
          <NightCityAndLightHouse className='animate-obj animation-city-3 -z-40' />
          <NightGrassAndTrees
            ref={grassRef1}
            className='animate-obj animation-grass-1 -z-30'
          />
          <NightGrassAndTrees className='animate-obj animation-grass-2 -z-30' />
          <NightGrassAndTrees className='animate-obj animation-grass-3 -z-30' />
        </div>
      )}
      {!darkTheme && (
        <div>
          <Sun className='-z-60 animate-obj' />
          <DayBg ref={bgRef1} className='animate-obj animation-bg-1 -z-50' />
          <DayBg className='animate-obj animation-bg-2 -z-50' />
          <DayBg className='animate-obj animation-bg-3 -z-50' />
          <DayCityAndLightHouse
            ref={cityRef1}
            className='animate-obj animation-city-1 -z-40'
          />
          <DayCityAndLightHouse className='animate-obj animation-city-2 -z-40' />
          <DayCityAndLightHouse className='animate-obj animation-city-3 -z-40' />
          <DayGrassAndTrees
            ref={grassRef1}
            className='animate-obj animation-grass-1 -z-30'
          />
          <DayGrassAndTrees className='animate-obj animation-grass-2 -z-30' />
          <DayGrassAndTrees className='animate-obj animation-grass-3 -z-30' />
        </div>
      )}
      <Train
        ref={trainRef}
        className='animation-train absolute bottom-3/10 w-120 train right-1/2 -z-40 transform md:translate-x-1/2'
      />
    </div>
  )
}

export default Animation
