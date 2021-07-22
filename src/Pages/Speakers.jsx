import React from 'react'
import { ReactComponent as SpeakersBackground } from '../Assets/Speaker Moon.svg'
import { ReactComponent as SpeakersMap } from '../Assets/Speakers Map.svg'

export default function Speakers () {
  return (
    <div>
      <SpeakersBackground className='w-full h-auto' />

      <div class='-my-6 bg-jams_black p-10'>
        <div class='font-sora font-bold text-2xl md:text-3xl md:my-6 xl:text-5xl text-center text-white'>
          Speakers
        </div>
        <div className='text-' />
        <SpeakersMap className='w-full h-auto my-10 lg:w-2/3 mx-auto' />
      </div>
    </div>
  )
}
