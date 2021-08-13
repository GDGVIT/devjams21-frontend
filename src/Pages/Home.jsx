import React from 'react'
import Events from '../Components/Events'
import { ReactComponent as DevJamsLogo } from '../Assets/Logos/DevJams Logo.svg'
import { ReactComponent as Mouse } from '../Assets/Mouse.svg'
import '../Styles/Home.css'

export default function Home (props) {
  const theme = props.darkTheme ? 'dark' : 'light'

  return (
    <>
      <DevJamsCard theme={theme} />
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
    </>
  )
}

const DevJamsCard = (props) => {
  return (
    <div className='w-screen h-screen grid place-items-center relative bottom-20'>
      <div
        className={`devjams-card--${props.theme} card-shadow grid place-items-center p-5 z-10 rounded-lg mx-5`}
      >
        <DevJamsLogo className='w-full' />
        <Mouse className={`w-5 mouse--${props.theme}`} />
      </div>
    </div>
  )
}
