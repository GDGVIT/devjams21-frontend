import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { ReactComponent as GDSCLogoNight } from '../Assets/Logos/GDSC Logo Night.svg'
import discord from '../Assets/Discord.svg'

import { ReactComponent as Train } from '../Assets/Train Animations/Train.svg'

// TODO: Need to replace this later
// Light
// import { ReactComponent as MoonBg } from '../Assets/Train Animations/Night/MoonBg.svg'
// import { ReactComponent as NightCityAndLightHouse } from '../Assets/Train Animations/Night/CityLighthouse.svg'
// import { ReactComponent as GrassAndTrees } from '../Assets/Train Animations/Night/GrassAndTrees.svg'

// Dark
import { ReactComponent as MoonBg } from '../Assets/Train Animations/Night/MoonBg.svg'
import NightCityAndLightHouse from '../Assets/Train Animations/Night/CityLighthouse'
import { ReactComponent as GrassAndTrees } from '../Assets/Train Animations/Night/GrassAndTrees.svg'

import { useHistory } from 'react-router-dom'
import { moveIntoView } from '../Utils/Scroll'
import '../Styles/Navbar.css'

const Navbar = (props) => {
  const location = useLocation()
  const history = useHistory()
  const { darkTheme, setBodyRender, navlinksOpen, setNavlinksOpen } = props
  const [startAnimation, setStartAnimation] = useState(false)
  const pathname = location.pathname

  const handleClick = (event) => {
    let route = event.target.id
    if (route === 'home') {
      route = ''
    }
    if (pathname !== `/${route}`) {
      setStartAnimation(true)
      setNavlinksOpen(false)
      setTimeout(() => {
        moveIntoView(setBodyRender, history, route, setStartAnimation)
      }, 700)
    }
  }

  const handleNavbarOpen = () => {
    setNavlinksOpen(!navlinksOpen)
    console.log(navlinksOpen)
  }

  return (
    <div>
      <div className='h-screen w-screen fixed overflow-hidden'>
        {darkTheme && ( // dark
          <div>
            <MoonBg className='animation-bg h-full absolute' />
            <NightCityAndLightHouse className='animation-city absolute z-10 h-full' />
            <GrassAndTrees className='animation-grass h-full z-20 absolute' />
          </div>
        )}
        {!darkTheme && ( // TODO: change to light
          <div>
            <MoonBg className='animation-bg h-full absolute' />
            <NightCityAndLightHouse className='animation-city absolute z-10 h-full' />
            <GrassAndTrees className='animation-grass h-full z-20 absolute' />
          </div>
        )}
        <Train className='w-1/2 left-1/4 z-20 absolute top-2/3 transform -translate-y-8' />
      </div>
      <div>
        {darkTheme && (
          <GDSCLogoNight
            className={`invisible lg:visible z-20 fixed left-8 transition-all ease-in-out duration-500 ${
              startAnimation ? '-top-48' : 'top-8'
            }`}
          />
        )}
        {!darkTheme && ( // TODO: Need to change to light themed logo
          <GDSCLogoNight
            className={`invisible fixed lg:visible z-20 left-8 transition-all ease-in-out duration-500 ${
              startAnimation ? '-top-48' : 'top-8'
            }`}
          />
        )}

        {/* Navlinks mobile */}
        <div className='z-40 w-36 h-full lg:hidden'>
          {/* Hamburger icon */}
          <div
            onClick={handleNavbarOpen}
            className={`fixed left-8 z-40 flex flex-col justify-between w-8 h-5 transition-all ease-in-out duration-500 cursor-pointer lg:invisible ${
              startAnimation ? '-top-48' : 'top-8'
            }`}
          >
            <span className='h-1 w-full bg-white rounded-lg' />
            <span className='h-1 w-full bg-white rounded-lg' />
            <span className='h-1 w-full bg-white rounded-lg' />
          </div>
          {/* Navlinks */}
          <div
            className={`bg-white w-72 h-full flex flex-col items-center text-left text-black top-0 z-60 transition-all ease-in-out duration-500 ${
              navlinksOpen ? 'left-0 fixed' : '-left-96 absolute'
            }`}
          >
            <div className='close' onClick={handleNavbarOpen} />
            <h4
              className={`nav-link ${
                pathname === '/' && 'nav-link-active'
              } mt-32 mb-10`}
              onClick={handleClick}
              id='home'
            >
              Home
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/about' && 'nav-link-active'
              } mb-10`}
              onClick={handleClick}
              id='about'
            >
              About Us
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/events' && 'nav-link-active'
              } mb-10`}
              onClick={handleClick}
              id='events'
            >
              Events
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/faq' && 'nav-link-active'
              } mb-10`}
              onClick={handleClick}
              id='faq'
            >
              FAQ
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/sponsors' && 'nav-link-active'
              } mb-10`}
              onClick={handleClick}
              id='sponsors'
            >
              Sponsors
            </h4>
          </div>
        </div>

        {/* Navlinks desktop */}
        <div
          className={`flex fixed items-center right-8 font-sora z-50 transition-all ease-in-out duration-500 ${
            startAnimation ? '-top-48' : 'top-8'
          }`}
        >
          <div className='hidden text-white lg:flex'>
            <h4
              className={`nav-link ${
                pathname === '/' && 'nav-link-active'
              } mr-8`}
              onClick={handleClick}
              id='home'
            >
              Home
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/about' && 'nav-link-active'
              } mr-8`}
              onClick={handleClick}
              id='about'
            >
              About Us
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/events' && 'nav-link-active'
              } mr-8`}
              onClick={handleClick}
              id='events'
            >
              Events
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/faq' && 'nav-link-active'
              } mr-8`}
              onClick={handleClick}
              id='faq'
            >
              FAQ
            </h4>
            <h4
              className={`nav-link ${
                pathname === '/sponsors' && 'nav-link-active'
              } mr-8`}
              onClick={handleClick}
              id='sponsors'
            >
              Sponsors
            </h4>
          </div>

          {/* Login button */}
          <div className='cursor-pointer z-50 px-10 py-2 rounded-md text-white border-solid text-lg font-bold font-sora border-2 bg-red-500 border-red-500 2xl:text-xl hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 ease-in-out'>
            Login
          </div>
        </div>

        {/* Discord button */}
        <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
          <div
            className={`fixed items-center overflow-hidden flex w-14 h-14 z-50 hover:w-56 right-8 rounded transition-all duration-300 ease-in-out ${
              startAnimation ? '-bottom-48' : 'bottom-5'
            }`}
          >
            <img src={discord} alt='Discord' className='h-full' />
            <span className='h-1/2 border-l-2 border-white' />
            <h1 className='discord-bg font-sora whitespace-nowrap font-semibold ml-3 text-white w-52 h-full'>
              Join our Discord
            </h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar
