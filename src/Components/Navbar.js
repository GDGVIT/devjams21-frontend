import React, { useEffect, useState } from 'react'
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
  const [startAnimation, setStartAnimation] = useState(false)
  const location = useLocation()
  const history = useHistory()
  const pathname = location.pathname
  const [date, setDate] = useState(new Date());
  const hour = 1000*60*60

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), hour )
    return function cleanup() {
      clearInterval(timer)
    }
  })

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
        { date.getHours() > 18 ?
          <div>
            <Background className='animation-bg h-full absolute' />
            <Backdrop className='animation-city absolute z-10 h-full' />
            <Foreground className='animation-grass h-full z-20 absolute' />
          </div>
          :
          <div>
            <Background className='animation-bg h-full absolute' />
            <Backdrop className='animation-city absolute z-10 h-full' />
            <Foreground className='animation-grass h-full z-20 absolute' />
          </div>
        }
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
            <a href='https://discord.com'>
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
