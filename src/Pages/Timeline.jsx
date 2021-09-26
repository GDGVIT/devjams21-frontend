import React, { useRef } from 'react'
import Baner from '../Components/Baner'
import Contact from '../Components/Contact'
import TimelineDark from '../Assets/Timeline/Timeline Dark.svg'
import TimelineLight from '../Assets/Timeline/Timeline Light.svg'

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
        className='w-screen flex justify-center items-center lg:w-5/6 mx-auto px-6 pt-28 pb-6'
        ref={contentRef}
      >
          <div className='w-full'>
            {
              props.darkTheme
                ? <img src={TimelineDark} alt='timeline dark' className='w-full h-full' />
                : <img src={TimelineLight} alt='timeline light' className='w-full h-full' />
            }
          </div>
      </div>
      <Contact darkTheme={props.darkTheme} />
    </div>
  )
}
