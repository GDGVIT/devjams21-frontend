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
  const [navlinksOpen, setNavlinksOpen] = useState(false)
  const pathname = location.pathname

  const handleClick = (event) => {
    let route = event.target.id
    if (route === 'home') {
      route = ''
    }
    if (pathname !== `/${route}`) {
      setStartAnimation(true)
      setTimeout(() => {
        moveIntoView(props.setBodyRender, history, route, setStartAnimation)
      }, 700)
    }
  }

  const handleNavbarOpen = () => {
    console.log('click')
    setNavlinksOpen(!navlinksOpen)
  }

  return (
    <div>
      <div className='h-screen w-full relative overflow-hidden'>
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
      <div>
        <Logo className={`invisible lg:visible z-20 absolute left-8 ${startAnimation ? 'animateUp' : 'animateDown'}`} />

        {/* Navlinks mobile */}
        <div className='z-30 bg-white w-36 h-full  lg:invisible'>
          {/* Hamburger icon */}
          <div onClick={handleNavbarOpen} className={`absolute left-8 top-8 z-30 flex flex-col justify-between w-8 h-5 cursor-pointer lg:invisible ${startAnimation ? 'animateUp' : 'animateDown'}`}>
            <span className='h-1 w-full bg-white rounded-lg' />
            <span className='h-1 w-full bg-white rounded-lg' />
            <span className='h-1 w-full bg-white rounded-lg' />
          </div>
          {/* Navlinks */}
          {navlinksOpen &&
            <div className='bg-white w-72 h-full flex flex-col items-center text-left text-black z-40 absolute left-0 top-0'>
              <div className='close' />
              <h4 className={`nav-link ${(pathname === '/') && 'nav-link-active'} mt-32 mb-10`} onClick={handleClick} id='home'>Home</h4>
              <h4 className={`nav-link ${(pathname === '/about') && 'nav-link-active'} mb-10`} onClick={handleClick} id='about'>About Us</h4>
              <h4 className={`nav-link ${(pathname === '/events') && 'nav-link-active'} mb-10`} onClick={handleClick} id='events'>Events</h4>
              <h4 className={`nav-link ${(pathname === '/faq') && 'nav-link-active'} mb-10`} onClick={handleClick} id='faq'>FAQ</h4>
              <h4 className={`nav-link ${(pathname === '/sponsors') && 'nav-link-active'} mb-10`} onClick={handleClick} id='sponsors'>Sponsors</h4>
            </div>}
        </div>

        {/* Navlinks desktop */}
        <div className={`flex absolute items-center right-8 font-sora ${startAnimation ? 'animateUp' : 'animateDown'}`}>
          <div className='flex invisible text-white lg:visible'>
            <h4 className={`nav-link ${(pathname === '/') && 'nav-link-active'} mr-8`} onClick={handleClick} id='home'>Home</h4>
            <h4 className={`nav-link ${(pathname === '/about') && 'nav-link-active'} mr-8`} onClick={handleClick} id='about'>About Us</h4>
            <h4 className={`nav-link ${(pathname === '/events') && 'nav-link-active'} mr-8`} onClick={handleClick} id='events'>Events</h4>
            <h4 className={`nav-link ${(pathname === '/faq') && 'nav-link-active'} mr-8`} onClick={handleClick} id='faq'>FAQ</h4>
            <h4 className={`nav-link ${(pathname === '/sponsors') && 'nav-link-active'} mr-8`} onClick={handleClick} id='sponsors'>Sponsors</h4>
          </div>

          {/* Login button */}
          <div
            className='cursor-pointer z-30 px-10 py-2 rounded-md text-white border-solid text-lg font-bold font-sora border-2 bg-red-500 border-red-500 2xl:text-xl hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 ease-in-out'
          >
            Login
          </div>
        </div>

        {/* Discord button */}
        <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
          <div
            className={`fixed items-center overflow-hidden flex w-14 h-14 z-40 hover:w-56 right-8 rounded transition-all duration-300 ease-in-out ${startAnimation ? 'animateDiscordDown' : 'animateDiscordUp'}`}
          >
            <img src={discord} alt='Discord' className='h-full' />
            <span className='h-1/2 border-l-2 border-white' />
            <h1 className='discord-bg font-sora whitespace-nowrap font-semibold ml-3 text-white w-52 h-full'>Join our Discord</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar
