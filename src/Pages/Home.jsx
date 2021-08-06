import React from 'react'
import Events from '../Components/Events'

const theme = 'dark'

export default function Home () {
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-jams_black' : 'bg-white'
      } font-sora py-10`}
    >
      <div
        className={`${
          theme === 'dark' ? 'text-white' : 'text-black'
        } text-2xl sm:text-3xl md:text-4xl my-5 sm:my-10 font-bold text-center`}
      >
        DevJams 2021
      </div>
      <Events />
    </div>
  )
}
