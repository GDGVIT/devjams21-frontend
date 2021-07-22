import React from 'react'
import { ReactComponent as TimelineBackground } from '../Assets/Moon Timeline.svg'
import { ReactComponent as TimelineMap } from '../Assets/Timeline Map.svg'

export default function Timeline () {
  return (
    <div>
      <TimelineBackground className='w-full h-auto' />

      <div class='-my-6 bg-jams_black p-10'>
        <div class='font-sora font-bold text-2xl md:text-3xl md:my-6 xl:text-5xl text-center text-white'>
          TimeLine
        </div>
        <TimelineMap className='w-full h-auto my-10 lg:w-2/3 mx-auto' />
      </div>
    </div>
  )
}
