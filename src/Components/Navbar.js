import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as GDSCLogoNight } from '../Assets/Logos/GDSC Logo Night.svg'
import { ReactComponent as GDSCLogoDay } from '../Assets/Logos/GDSC Logo Day.svg'
import GDSCLogoMobile from '../Assets/Logos/GDSC Logo Mobile.png'
import { animations } from '../Utils/Animations'
import { moveIntoView } from '../Utils/Scroll'

import { ReactComponent as Train } from '../Assets/TrainAnimations/Train.svg'
import discord from '../Assets/Discord.svg'

// Light
import { ReactComponent as DayBg } from '../Assets/TrainAnimations/Day/DayBg.svg'
import { ReactComponent as DayCityAndLightHouse } from '../Assets/TrainAnimations/Day/CityLightHouse.svg'
import { ReactComponent as DayGrassAndTrees } from '../Assets/TrainAnimations/Day/GrassAndTrees.svg'

// Dark
import { ReactComponent as MoonBg } from '../Assets/TrainAnimations/Night/MoonBg.svg'
import { ReactComponent as NightCityAndLightHouse } from '../Assets/TrainAnimations/Night/CityLighthouse.svg'
import { ReactComponent as NightGrassAndTrees } from '../Assets/TrainAnimations/Night/GrassAndTrees.svg'

import '../Styles/Navbar.css'

const Navbar = ({
  darkTheme,
  setBodyRender,
  navlinksOpen,
  setNavlinksOpen
}) => {
  const location = useLocation()
  const history = useHistory()

  const [startAnimation, setStartAnimation] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const [metrics, setMetrics] = useState(null)

  const bgRef1 = useRef(null)
  const cityRef1 = useRef(null)
  const grassRef1 = useRef(null)
  const bgRef2 = useRef(null)
  const cityRef2 = useRef(null)
  const grassRef2 = useRef(null)
  const trainRef = useRef(null)

  const navbarMobileRef = useRef(null)

  const pathname = location.pathname

  // route we should go to
  const [destination, setDestination] = useState(pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarMobileRef.current &&
        !navbarMobileRef.current.contains(event.target)
      ) {
        setNavlinksOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarMobileRef, setNavlinksOpen])

  const handleClick = (route) => {
    if (!startAnimation) {
      const dest = route
      const currentStation = pathname
      setNavlinksOpen(false)

      if (dest && currentStation !== dest) {
        setStartAnimation(true)
        setDestination(dest)
      }
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
    }
  })

  useEffect(() => {
    const { findMetrics } = animations()

    const lengths = {
      bg: bgRef1.current.getBoundingClientRect().width,
      city: cityRef1.current.getBoundingClientRect().width,
      grass: grassRef1.current.getBoundingClientRect().width,
      trainPos: trainRef.current.getBoundingClientRect().x,
      train: trainRef.current.getBoundingClientRect().width
    }
    findMetrics(lengths)
    setMetrics(lengths)
  }, []); //eslint-disable-line

  useEffect(() => {
    if (metrics) {
      const { identifyCurrentLocation } = animations()
      identifyCurrentLocation(destination)
    }
  }, [metrics]); //eslint-disable-line

  useEffect(() => {
    if (startAnimation) {
      const { trainAnimation } = animations()

      moveIntoView(setBodyRender)

      const currentStation = pathname
      const destinationStation = destination

      trainAnimation(currentStation, destinationStation).then(() => {
        setStartAnimation(false)
        history.push(destination)
        setBodyRender(true)
      })
    }
  }, [startAnimation, destination, setBodyRender, pathname, history])

  const handleNavbarOpen = () => {
    setNavlinksOpen(!navlinksOpen)
  }

  return (
    <>
      <div className='h-screen w-screen fixed overflow-hidden'>
        {darkTheme && ( // dark
          <div>
            <MoonBg ref={bgRef1} className='animate-obj animation-bg-1 -z-50' />
            <MoonBg ref={bgRef2} className='animate-obj animation-bg-2 -z-50' />
            <NightCityAndLightHouse
              ref={cityRef1}
              className='animate-obj animation-city-1 -z-40'
            />
            <NightCityAndLightHouse
              ref={cityRef2}
              className='animate-obj animation-city-2 -z-40'
            />
            <NightGrassAndTrees
              ref={grassRef1}
              className='animate-obj animation-grass-1 -z-30'
            />
            <NightGrassAndTrees
              ref={grassRef2}
              className='animate-obj animation-grass-2 -z-30'
            />
          </div>
        )}
        {!darkTheme && (
          <div>
            <DayBg ref={bgRef1} className='animate-obj animation-bg-1 -z-50' />
            <DayBg ref={bgRef2} className='animate-obj animation-bg-2 -z-50' />
            <DayCityAndLightHouse
              ref={cityRef1}
              className='animate-obj animation-city-1 -z-40'
            />
            <DayCityAndLightHouse
              ref={cityRef2}
              className='animate-obj animation-city-2 -z-40'
            />
            <DayGrassAndTrees
              ref={grassRef1}
              className='animate-obj animation-grass-1 -z-30'
            />
            <DayGrassAndTrees
              ref={grassRef2}
              className='animate-obj animation-grass-2 -z-30'
            />
          </div>
        )}
        <Train
          ref={trainRef}
          className='animation-train absolute bottom-3/10 w-120 train right-1/2 -z-40 transform md:translate-x-1/2'
        />
      </div>
      {/* Navbar */}
      <div
        className={`fixed z-40 h-16 lg:h-20 w-full ${
          navbarBg
            ? `${darkTheme ? 'bg-indigo-900' : 'bg-white'} bottom-shadow`
            : ''
        } transition-all duration-300 ease-in-out`}
      >
        {/* GDSC Logo */}
        <div className='hidden lg:block'>
          {darkTheme && (
            <GDSCLogoNight className='w-72 invisible hidden lg:visible lg:absolute z-50 left-6 transition-all ease-in-out duration-300 top-5' />
          )}
          {!darkTheme && (
            <GDSCLogoDay className='w-72 invisible lg:visible lg:absolute z-50 left-6 transition-all ease-in-out duration-300 top-5' />
          )}
        </div>

        {/* Navbar Mobile */}
        <div>
          <div className='z-40 w-36 h-full lg:hidden'>
            {/* Hamburger */}
            <div
              onClick={handleNavbarOpen}
              className='z-40 flex flex-col mt-5 ml-5 justify-between w-8 h-5 transition-all ease-in-out duration-300 cursor-pointer lg:invisible'
            >
              <span
                className={`h-1 w-full  rounded-lg ${
                  darkTheme ? 'bg-white' : 'bg-black'
                }`}
              />
              <span
                className={`h-1 w-full  rounded-lg ${
                  darkTheme ? 'bg-white' : 'bg-black'
                }`}
              />
              <span
                className={`h-1 w-full  rounded-lg ${
                  darkTheme ? 'bg-white' : 'bg-black'
                }`}
              />
            </div>
            {/* Links mobile */}
            <div
              ref={navbarMobileRef}
              className={`${
                darkTheme ? 'bg-indigo-900 text-white' : 'bg-white text-black'
              } w-60 h-full flex flex-col items-center text-left top-0 z-60 transition-all ease-in-out duration-300 ${
                navlinksOpen ? 'left-0 fixed' : '-left-96 absolute'
              }`}
            >
              <div className='close' onClick={handleNavbarOpen} />
              <h4
                className={`nav-link ${
                  pathname === '/' && 'nav-link-active'
                } mt-32 mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/')}
              >
                Home
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/about' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/about')}
              >
                About Us
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/timeline' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/timeline')}
              >
                Timeline
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/faq' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/faq')}
              >
                FAQ
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/sponsors' && 'nav-link-active'
                } mb-10 ${
                  !startAnimation ? 'cursor-pointer hover:opacity-100' : ''
                }`}
                onClick={() => handleClick('/sponsors')}
              >
                Sponsors
              </h4>
            </div>
          </div>

          {/* Navbar desktop */}
          <div className='flex fixed items-center right-8 font-sora z-50 transition-all ease-in-out duration-300 top-6'>
            <div
              className={`hidden lg:flex ${
                darkTheme ? 'text-white' : 'text-black'
              }`}
            >
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/')}
              >
                Home
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/about' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/about')}
              >
                About Us
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/timeline' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/timeline')}
              >
                Timeline
              </h4>
              <h4
                className={`nav-link mr-8 ${
                  pathname === '/faq' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/faq')}
              >
                FAQ
              </h4>
              <h4
                className={`nav-link ${
                  pathname === '/sponsors' && 'nav-link-active'
                } ${!startAnimation ? 'cursor-pointer hover:opacity-100' : ''}`}
                onClick={() => handleClick('/sponsors')}
              >
                Sponsors
              </h4>
            </div>

            {/* Login button */}
            {/* <div className='cursor-pointer z-50 px-10 py-2 rounded-md text-white border-solid text-lg font-bold font-sora border-2 bg-red-500 border-red-500 2xl:text-xl hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 ease-in-out'>
              Login
            </div> */}
          </div>
        </div>

        {/* Discord button */}
        <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
          <div className='fixed items-center overflow-hidden flex w-14 h-14 z-50 hover:w-56 right-8 rounded transition-all duration-300 ease-in-out bottom-5'>
            <img src={discord} alt='Discord' className='h-full' />
            <span className='h-1/2 border-l-2 border-white' />
            <h1 className='discord-bg font-sora whitespace-nowrap font-semibold ml-3 text-white w-52 h-full'>
              Join our Discord
            </h1>
          </div>
        </a>
      </div>
      <div className='absolute -bottom-2 visible lg:invisible w-1/2 left-1/4 md:left-1/3 md:w-1/3 h-24 md:h-32 bg-white rounded-xl px-6 pt-4 pb-6 transition-all duration-500 ease-in-out'>
        <img src={GDSCLogoMobile} alt='Logo mobile' className='w-full' />
      </div>
    </>
  )
}

export default Navbar
