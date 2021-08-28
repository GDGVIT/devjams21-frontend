import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as GDSCLogoNight } from '../Assets/Logos/GDSC Logo Night.svg'
import { ReactComponent as GDSCLogoDay } from '../Assets/Logos/GDSC Logo Day.svg'
// import { ReactComponent as GDSCLogoMobile } from '../Assets/Logos/GDSC Logo Mobile.svg'
import { animations } from '../Utils/Animations'
import { moveIntoView } from '../Utils/Scroll'

import discord from '../Assets/Discord.svg'

import '../Styles/Navbar.css'

const Navbar = ({
  darkTheme,
  setBodyRender,
  navlinksOpen,
  setNavlinksOpen
}) => {
  const location = useLocation()
  const history = useHistory()

  const pathname = location.pathname

  const [startAnimation, setStartAnimation] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const navbarMobileRef = useRef(null)

  // route we should go to
  const [destination, setDestination] = useState(pathname)

  console.log(destination)

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
      {/* Navbar */}
      <div
        className={`fixed z-40 h-20 lg:h-24 w-full ${
          navbarBg
            ? `${darkTheme ? 'bg-indigo-900' : 'bg-white'} bottom-shadow`
            : ''
        } transition-all duration-300 ease-in-out`}
      >
        {/* GDSC Logo */}
        <div>
          {darkTheme && (
            <GDSCLogoNight className='w-96 invisible lg:visible lg:absolute z-50 left-8 transition-all ease-in-out duration-300 top-4' />
          )}
          {!darkTheme && (
            <GDSCLogoDay className='w-72 invisible lg:visible lg:absolute z-50 left-8 transition-all ease-in-out duration-300 -top-3' />
          )}
        </div>

        {/* Navbar Mobile */}
        <div>
          <div className='z-40 w-36 h-full lg:hidden'>
            {/* Hamburger */}
            <div
              onClick={handleNavbarOpen}
              className='fixed left-8 z-40 flex flex-col justify-between w-8 h-5 transition-all ease-in-out duration-300 cursor-pointer lg:invisible top-7 lg:top-9'
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
          <div className='flex fixed items-center right-8 font-sora pt-2 z-50 transition-all ease-in-out duration-300 top-6'>
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

        {/* <div className={`sticky visible lg:invisible w-1/2 md:w-1/4 h-24 md:h-24 z-30 left-28 md:left-1/3 bg-white rounded-xl px-6 pt-4 pb-6 transition-all duration-500 ease-in-out  ${
            startAnimation ? '-bottom-48' : '-bottom-2'
          }`}
        >
          <img src={GDSCLogoMobile} alt='logo mobile' />
        </div> */}

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
    </>
  )
}

export default Navbar
