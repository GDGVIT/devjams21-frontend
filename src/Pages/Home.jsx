import React from 'react'
import Events from '../Components/Events'

export default function Home (props) {
  return (
    <div
      className={`${
        props.darkTheme ? 'bg-jams_black' : 'bg-white'
      } font-sora py-10`}
    >
      <div
        className={`${
          props.darkTheme ? 'text-white' : 'text-black'
        } text-2xl sm:text-3xl md:text-4xl my-5 sm:my-10 font-bold text-center`}
      >
        DevJams 2021
      </div>
      <Events darkTheme={props.darkTheme} />
    </div>
  )
}
