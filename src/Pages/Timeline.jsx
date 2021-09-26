import React, { useRef } from 'react'
import Baner from '../Components/Baner'
import Contact from '../Components/Contact'
import { ReactComponent as TimelineDark } from '../Assets/Timeline/Timeline Dark.svg'
import { ReactComponent as TimelineLight } from '../Assets/Timeline/Timeline Light.svg'

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
        className='w-screen lg:w-5/6 mx-auto p-6'
        ref={contentRef}
      >
        <div>
          <div>
            {
              props.darkTheme
                ? <TimelineDark className='w-full h-auto' />
                : <TimelineLight className='w-full h-auto' />
            }
          </div>
        </div>
      </div>
      <Contact darkTheme={props.darkTheme} />
    </div>
  )
}
