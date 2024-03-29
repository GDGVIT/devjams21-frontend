import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as GDSCLogoNight } from '../Assets/Logos/GDSC Logo Night.svg'
import { ReactComponent as GDSCLogoDay } from '../Assets/Logos/GDSC Logo Day.svg'
import GDSCLogoMobile from '../Assets/Logos/GDSC Logo Mobile.png'
import { trainAnimation, reset } from '../Utils/Animations'
import { moveIntoView } from '../Utils/Scroll'
import '../Styles/Navbar.css'
import Discord from '../Assets/Discord'

const Navbar = ({
  darkTheme,
  setBodyRender,
  navlinksOpen,
  setNavlinksOpen,
  metrics
}) => {
  const [startAnimation, setStartAnimation] = useState(true)
  const location = useLocation()
  const history = useHistory()

  const pathname = location.pathname
  const [navbarBg, setNavbarBg] = useState(false)
  const [discoom, setDiscoom] = useState(true)

  const navbarMobileRef = useRef(null)
  const movedToInitialStation = useRef(false)
  const windowWidthRef = useRef(window.innerWidth)

  // route we should go to
  const [destination, setDestination] = useState(pathname)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiscoom(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [discoom])

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
    const recalc = () => {
      if (window.innerWidth !== windowWidthRef.current) {
        windowWidthRef.current = window.innerWidth
        setBodyRender(false)
        reset(pathname).then(() => setBodyRender(true))
      }
    }
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [pathname, setBodyRender])

  useEffect(() => {
    if (startAnimation && metrics) {
      moveIntoView(setBodyRender)

      let currentStation = pathname

      if (!movedToInitialStation.current) {
        currentStation = '/'
        movedToInitialStation.current = true
      }

      const destinationStation = destination

      trainAnimation(currentStation, destinationStation).then(() => {
        setStartAnimation(false)
        history.push(destination)
        setBodyRender(true)
        setDiscoom(true)
      })
    }
  }, [
    startAnimation,
    destination,
    setBodyRender,
    pathname,
    history,
    setStartAnimation,
    metrics
  ])

  const handleNavbarOpen = () => {
    setNavlinksOpen(!navlinksOpen)
  }

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed z-40 h-16 lg:h-20 w-full ${
          navbarBg
            ? `${darkTheme ? 'bg-indigo-900' : 'bg-white'} bottom-shadow`
            : ''
        } transition-all duration-300 ease-in-out`}
      >
        {/* GDSC Logo */}
        <a
          href='https://dscvit.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden lg:block'
        >
          {darkTheme && (
            <GDSCLogoNight className='w-72 invisible lg:visible lg:absolute z-50 left-6 transition-all ease-in-out duration-300 top-5' />
          )}
          {!darkTheme && (
            <GDSCLogoDay className='w-72 invisible lg:visible lg:absolute z-50 left-6 transition-all ease-in-out duration-300 top-5' />
          )}
        </a>

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
              } w-60 h-full flex flex-col font-sora items-center text-left top-0 z-60 transition-all ease-in-out duration-300 ${
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
          <div className='flex fixed items-center right-44 font-sora z-50 transition-all ease-in-out duration-300 top-6'>
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
        <a
          href='https://discord.com/invite/8KMMjA2qRC'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div
            className={`fixed items-center overflow-hidden flex ${
              discoom ? 'w-56' : 'w-14'
            } h-14 z-50 hover:w-56 right-6 rounded transition-all duration-500 ease-in-out bottom-5`}
          >
            <Discord className='h-full' darkTheme={darkTheme} />
            <span
              className={`h-1/2 border-l-2 ${
                darkTheme ? 'border-discord_violet' : 'border-white'
              }`}
            />
            <h1
              className={`discord-bg--${
                darkTheme
                  ? 'dark text-discord_violet'
                  : 'light text-discord_white'
              } font-sora whitespace-nowrap font-semibold ml-3 w-52 h-full`}
            >
              Join our Discord
            </h1>
          </div>
        </a>
      </div>

      {/* GDSC Mobile */}
      <a
        href='https://dscvit.com/'
        target='_blank'
        rel='noopener noreferrer'
        className={`absolute -bottom-2 ${
          window.scrollY > 0 ? '-left-2/4 md:-left-2/3' : 'left-1/4 md:left-1/3'
        }  z-30 visible lg:invisible w-1/2 md:w-1/3 h-24 md:h-32 bg-white rounded-xl px-6 pt-4 pb-6 transition-all duration-300 ease-in-out`}
      >
        <img src={GDSCLogoMobile} alt='Logo mobile' className='w-full' />
      </a>
    </>
  )
}

export default Navbar
