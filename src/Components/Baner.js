import React from 'react'
import '../Styles/Home.css'
import { ReactComponent as Mouse } from '../Assets/Mouse.svg'

export default function Baner (props) {
  return (
    <div className='w-screen h-screen grid place-items-center relative bottom-20'>
      <div
        style={{ background: props.color }}
        className='card-shadow grid text-white font-sora font-bold text-4xl md:text-6xl xl:text-7xl place-items-center py-5 px-9 lg:px-14 lg:pt-9 z-10 rounded-lg mx-5 transition-all duration-500 ease-in-out'
      >
        {props.title}
        <Mouse className='w-5 mouse--dark mt-5 cursor-pointer' onClick={props.handleScroll} />
      </div>
    </div>
  )
}
