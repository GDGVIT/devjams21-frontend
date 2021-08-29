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
      <div className='w-screen p-6 grid place-items-center' ref={contentRef}>
        <div className='text-2xl sm:text-3xl font-bold font-sora bg-jams_yellow text-white px-10 py-4 sm:py-8 rounded-full'>
          Coming Soon
        </div>
      </div>
      <Contact darkTheme={props.darkTheme} />
    </div>
  )
}
