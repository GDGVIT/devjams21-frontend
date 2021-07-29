import React from 'react'
import '../Styles/Navbar.css'
import { ReactComponent as Train } from '../Assets/Train.svg'
import { ReactComponent as Background } from '../Assets/Background_3_1.svg'
import { ReactComponent as Backdrop } from '../Assets/Foreground__Backdrop.svg'
import { ReactComponent as Foreground } from '../Assets/Foreground_3.svg'

const Navbar = () => {
  return (
    <div>
      <div className='h-screen w-full relative overflow-hidden'>
        <Background className='h-full absolute' />
        <Backdrop className='absolute z-10 h-full' />
        <Foreground className='h-full z-20 absolute' />
        <Train className='train w-1/2 left-1/4 z-20 absolute' />
      </div>
      <div className='absolute top-10 right-8'>
        <a href='www.google.com' className='z-40 cursor-pointer px-9 py-2 rounded-md text-yellow-300 border-solid text-lg font-bold font-sora border-2 border-yellow-300 hover:bg-yellow-300 text-transparent'>
          Login
        </a>
      </div>
    </div>
  )
}

export default Navbar
