import React, { useRef } from 'react'
import Baner from '../Components/Baner'
import Contact from '../Components/Contact'

export default function Timeline (props) {
  const contentRef = useRef(null)
  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='z-20 absolute'>
      <Baner color='#F9C531' title='Timeline' handleScroll={handleScroll} />
      <div
        className='w-screen h-screen p-6 grid place-items-center'
        ref={contentRef}
      >
        <div>
          <div className='sm:text-xl font-bold w-40 h-40 font-sora bg-jams_blue text-white sm:py-8 rounded-full grid place-items-center'>
            Coming Soon
          </div>
        </div>
      </div>
      <Contact darkTheme={props.darkTheme} />
    </div>
  )
}
