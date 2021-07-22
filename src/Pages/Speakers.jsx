import React from 'react'
import { ReactComponent as SpeakersBackground } from '../assets/Speaker Moon.svg'
import { ReactComponent as SpeakersMap } from '../assets/Speakers Map.svg'

export default function Speakers () {
  return (
    <div>
      <SpeakersBackground className='w-full h-auto' />

      <div class='-my-3 bg-jams_black p-10'>
        <div class='font-sora font-bold text-2xl md:text-3xl md:my-6 xl:text-5xl text-center text-white'>
          Speakers
        </div>
        <SpeakersMap className='w-full h-auto my-10 lg:w-2/3 mx-auto' />
      </div>
    </div>
  )
}
