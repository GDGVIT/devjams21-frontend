import React, { useEffect } from 'react'
import '../Styles/Navbar.css'
import { ReactComponent as Logo } from '../Assets/dscLogo.svg'
import { ReactComponent as Discord } from '../Assets/Discord.svg'
import { ReactComponent as Train } from '../Assets/Train.svg'
import { ReactComponent as Background } from '../Assets/Background_3_1.svg'
import { ReactComponent as Backdrop } from '../Assets/Foreground__Backdrop.svg'
import { ReactComponent as Foreground } from '../Assets/Foreground_3.svg'
import { useHistory } from 'react-router-dom'
import { moveIntoView } from '../Utils/Scroll'
import { animations } from '../Utils/Animations'

const Navbar = (props) => {
  const history = useHistory()
  const handleClick = () => {
    moveIntoView(props.setBodyRender, history)
  }

  useEffect(() => {
    const { trainAnimation } = animations()
    console.log('Animation started')
    trainAnimation().then(() => {
      console.log('Animation ended')
    })
  }, [])
  
  return (
    <div>
      <div className='h-screen w-full relative overflow-hidden'>
        <Logo className='z-20 absolute left-8 top-8' />
        <Background className='animation-bg h-full absolute' />
        <Backdrop className='animation-city absolute z-10 h-full' />
        <Foreground className='animation-grass h-full z-20 absolute' />
        <Train className='w-1/2 left-1/4 z-20 absolute bottom-1/4' />
      </div>
      <div onClick={handleClick} className='absolute top-8 right-8 cursor-pointer z-30 px-9 py-2 rounded-md text-yellow-300 border-solid text-lg font-bold font-sora border-2 border-yellow-300 2xl:text-xl hover:bg-yellow-300 hover:text-indigo-700'>
        Login
      </div>
      <div onClick={handleClick} className='discord absolute bottom-8 right-8 z-30'>
        <Discord />
      </div>
    </div>
  )
}

export default Navbar
