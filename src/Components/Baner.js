import React from 'react'
import { ReactComponent as Mouse } from '../Assets/Mouse.svg'

export default function Baner (props) {
  return (
    <div className='w-screen h-screen grid place-items-center z-30 relative bottom-20'>
      <div
        style={{ background: props.color }}
        className='card-shadow grid place-items-center pt-12 px-14 pb-5 rounded-lg text-white font-circularStd text-8xl font-bold'
      >
        {props.title}
        <Mouse className='w-5 text-white mt-3' />
      </div>
    </div>
  )
}
