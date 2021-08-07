import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { ReactComponent as Logo } from '../Assets/dscLogo.svg'
import discord from '../Assets/Discord.svg'
import { ReactComponent as Train } from '../Assets/Train.svg'
import { ReactComponent as Background } from '../Assets/Background_3_1.svg'
import { ReactComponent as Backdrop } from '../Assets/Foreground__Backdrop.svg'
import { ReactComponent as Foreground } from '../Assets/Foreground_3.svg'
import { useHistory } from 'react-router-dom'
import { moveIntoView } from '../Utils/Scroll'
import '../Styles/Navbar.css'

const Navbar = (props) => {
  const location = useLocation()
  const history = useHistory()
  const [startAnimation, setStartAnimation] = useState(false)
  const pathname = location.pathname

  const handleClick = (event) => {
    let route = event.target.id
    if (route === 'home') {
      route = ''
    }
    if (pathname !== `/${route}`) {
      setStartAnimation(true)
      moveIntoView(props.setBodyRender, history, route, setStartAnimation)
    }
  }

  return (
    <div>
      <div className='h-screen w-full relative overflow-hidden'>
        <Logo className='z-20 absolute left-8 top-8' />
        {props.darkTheme && // dark
          <div>
            <Background className='animation-bg h-full absolute' />
            <Backdrop className='animation-city absolute z-10 h-full' />
            <Foreground className='animation-grass h-full z-20 absolute' />
          </div>}
        {!props.darkTheme && // light
          <div>
            <Background className='animation-bg h-full absolute' />
            <Backdrop className='animation-city absolute z-10 h-full' />
            <Foreground className='animation-grass h-full z-20 absolute' />
          </div>}
        <Train className='w-1/2 left-1/4 z-20 absolute bottom-1/4 md:bottom-28/100 lg:bottom-28/100' />
      </div>
      {
        !startAnimation &&
          <div>
            <div className='flex absolute items-center top-8 right-8 font-sora'>
              <h4 className={`nav-link ${(pathname === '/') && 'nav-link-active'}`} onClick={handleClick} id='home'>Home</h4>
              <h4 className={`nav-link ${(pathname === '/about') && 'nav-link-active'}`} onClick={handleClick} id='about'>About Us</h4>
              <h4 className={`nav-link ${(pathname === '/events') && 'nav-link-active'}`} onClick={handleClick} id='events'>Events</h4>
              <h4 className={`nav-link ${(pathname === '/faq') && 'nav-link-active'}`} onClick={handleClick} id='faq'>FAQ</h4>
              <h4 className={`nav-link ${(pathname === '/sponsors') && 'nav-link-active'}`} onClick={handleClick} id='sponsors'>Sponsors</h4>
              <div
                className='cursor-pointer z-30 px-10 py-2 rounded-md text-white border-solid text-lg font-bold font-sora border-2 bg-red-500 border-red-500 2xl:text-xl hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 ease-in-out'
              >
                Login
              </div>
            </div>
            <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
              <div
                className='fixed items-center overflow-hidden flex bottom-5 right-5 w-14 h-14 z-40 hover:w-56 rounded transition-all duration-300 ease-in-out'
              >
                <img src={discord} alt='Discord' className='h-full' />
                <span className='h-1/2 border-l-2 border-white' />
                <h1 className='discord-bg font-sora whitespace-nowrap font-semibold ml-3 text-white w-52 h-full'>Join our Discord</h1>
              </div>
            </a>
          </div>
      }
    </div>
  )
}

export default Navbar
