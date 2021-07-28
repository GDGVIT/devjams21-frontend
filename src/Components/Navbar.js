import React from 'react'
import '../Styles/Navbar.css'
import { ReactComponent as Discord } from '../Assets/Discord.svg';
import { ReactComponent as Train } from '../Assets/Train.svg'
import { ReactComponent as Background } from '../Assets/Background_3_1.svg'
import { ReactComponent as Backdrop } from '../Assets/Foreground__Backdrop.svg'
import { ReactComponent as Foreground } from '../Assets/Foreground_3.svg'

const Navbar = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <Background className='h-screen absolute' />
      <Backdrop className='absolute z-10 h-full' />
      <Foreground className='h-full z-20 absolute' />
      <Train className='w-96 left-1/2 top-2/3 z-20 absolute' />
      <div className='absolute top-8 right-8 flex items-center'>
        <button className='mr-4 px-9 py-1 rounded-md text-yellow-300 border-solid text-lg font-bold font-sora border-2 border-yellow-300'>Login</button>
        <div className='discord'>
          <Discord className='w-3/4' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
