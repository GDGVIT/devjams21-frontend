import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { ReactComponent as Logo } from '../Assets/dscLogo.svg'
import { ReactComponent as Discord } from '../Assets/Discord.svg'
import { ReactComponent as Train } from '../Assets/Train.svg'
import { ReactComponent as Background } from '../Assets/Background_3_1.svg'
import { ReactComponent as Backdrop } from '../Assets/Foreground__Backdrop.svg'
import { ReactComponent as Foreground } from '../Assets/Foreground_3.svg'
import { useHistory } from 'react-router-dom'
import { moveIntoView } from '../Utils/Scroll'
import '../Styles/Navbar.css'

const Navbar = (props) => {
  const [startAnimation, setStartAnimation] = useState(false)
  const location = useLocation()
  const history = useHistory()
  const pathname = location.pathname

  const handleClick = (event) => {
    let route = event.target.id
    if (pathname !== `/${route}`) {
      if (route === 'home') {
        route = '/'
      }
      setStartAnimation(true)
      moveIntoView(props.setBodyRender, history, route, setStartAnimation)
    }
  }

  return (
    <div>
      <div className='h-screen w-full relative overflow-hidden'>
        <Logo className='z-20 absolute left-8 top-8' />
        <Background className='animation-bg h-full absolute' />
        <Backdrop className='animation-city absolute z-10 h-full' />
        <Foreground className='animation-grass h-full z-20 absolute' />
        <Train className='w-1/2 left-1/4 z-20 absolute bottom-1/4 md:bottom-28/100 lg:bottom-28/100' />
      </div>
      {
        !startAnimation &&
          <div>
            <div className='flex justify-around absolute bottom-27/100 text-white z-30 w-full'>
              <h4 className='cursor-pointer md:text-xl' onClick={handleClick} id='home'>Home</h4>
              <h4 className='cursor-pointer md:text-xl' onClick={handleClick} id='about'>About</h4>
              <h4 className='cursor-pointer md:text-xl' onClick={handleClick} id='events'>Events</h4>
              <h4 className='cursor-pointer md:text-xl' onClick={handleClick} id='faq'>FAQ</h4>
              <h4 className='cursor-pointer md:text-xl' onClick={handleClick} id='sponsors'>Sponsors</h4>
            </div>
            <div
              className='absolute top-8 right-8 cursor-pointer z-30 px-9 py-2 rounded-md text-yellow-300 border-solid text-lg font-bold font-sora border-2 border-yellow-300 2xl:text-xl hover:bg-yellow-300 hover:text-indigo-700'
            >
              Login
            </div>
            <div
              className='discord absolute bottom-8 right-8 z-30'
            >
              <Discord />
            </div>
          </div>
      }
    </div>
  )
}

export default Navbar
