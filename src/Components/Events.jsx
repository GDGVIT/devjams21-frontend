import React, { useEffect, useRef } from 'react'
import { resizing } from '../Utils/MasonryLayout'
import events from '../Data/EventsData'
import '../Styles/Components/Events.css'

// Logos
import { ReactComponent as DevJamsLogo } from '../Assets/Logos/DevJams Logo.svg'
import { ReactComponent as KnockathonLogo } from '../Assets/Logos/Knockathon Logo.svg'
import { ReactComponent as DevTalksLogo } from '../Assets/Logos/DevTalks Logo.svg'
import { ReactComponent as DesignzzzLogo } from '../Assets/Logos/Designzz Logo.svg'
import { ReactComponent as CTFLogo } from '../Assets/Logos/CTF Logo.svg'

// Devjams Grid SVGs
import { ReactComponent as RightArrow } from '../Assets/Home/Right Arrow.svg'
import DevJamsGridGround from '../Assets/Home/DevJamsGridGround'

const theme = 'dark'

export default function Events () {
  const homeContainerRef = useRef(null)

  useEffect(() => {
    const { resizeGridItem } = resizing()
    const masonrify = () => resizeGridItem(homeContainerRef.current)
    window.addEventListener('resize', masonrify)

    masonrify()

    return () => {
      window.removeEventListener('resize', masonrify)
    }
  }, [])

  return (
    <div
      ref={homeContainerRef}
      className='events-container mx-auto lg:w-3/4 xl:w-2/3'
    >
      <DevJamsGrid />
      <CurrentEventGrid event={events.knockathon}>
        <KnockathonLogo className='w-20' />
      </CurrentEventGrid>
      <ComingSoonGrid event={events.devtalks}>
        <DevTalksLogo className='w-20' />
      </ComingSoonGrid>
      <ComingSoonGrid event={events.designzzz}>
        <DesignzzzLogo className='w-20' />
      </ComingSoonGrid>
      <ComingSoonGrid event={events.ctf}>
        <CTFLogo className='w-20' />
      </ComingSoonGrid>
    </div>
  )
}

// Don't remove event class its not for CSS

const DevJamsGrid = () => {
  return (
    <div
      className={`grid--${theme} coming-soon-grid--${theme} ${events.devjams.class}--${theme} event col-span-full relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className='flex items-center py-5 px-10'>
        <div>
          <DevJamsLogo className='w-32 sm:w-40 h-auto my-5' />
          <div
            className={`content--${theme} text-xs sm:text-sm md:text-base pb-6`}
          >
            {events.devjams.content}
          </div>
        </div>
        <div className='absolute top-5 right-10 sm:static px-5'>
          <RightArrow className='w-6 sm:w-8' />
        </div>
      </div>
      <DevJamsGridGround theme={theme} />
    </div>
  )
}

const CurrentEventGrid = (props) => {
  const { name, date, content } = props.event

  return (
    <div
      className={`grid--${theme} register-grid--${theme} event relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className='content-container'>
        <div>
          {props.children}
          <div className='text-lg sm:text-xl lg:text-2xl font-bold'>{name}</div>
          <div className='text-jams_pink'>{date}</div>
        </div>
        <div className={`content--${theme}`}>{content}</div>
        <div className='text-center'>
          <button className={`btn__register--${theme} grid-btn`}>
            Register
          </button>
        </div>
      </div>

      {/* circles */}
      <Circles info={props.event} />
    </div>
  )
}

const ComingSoonGrid = (props) => {
  const { name, date, content } = props.event

  return (
    <div
      className={`grid--${theme} coming-soon-grid--${theme} event relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className='content-container'>
        <div>
          {props.children}
          <div className='text-lg sm:text-xl lg:text-2xl font-bold'>{name}</div>
          <div className='text-jams_pink'>{date}</div>
        </div>
        <div className={`content--${theme}`}>{content}</div>
        <div className='text-center'>
          <button className={`btn__coming-soon--${theme} grid-btn`}>
            Coming Soon
          </button>
        </div>
      </div>
      <Circles info={props.event} />
    </div>
  )
}

const Circles = (props) => {
  const { coords, classname } = props.info

  return (
    <>
      <div
        style={{ width: '300px', height: '300px' }}
        className={`circle ${coords.circle1} ${classname}__circle--${theme}`}
      />
      <div
        style={{ width: '200px', height: '200px' }}
        className={`circle ${coords.circle2} ${classname}__circle--${theme}`}
      />
    </>
  )
}
