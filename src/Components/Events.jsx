import React, { useRef } from 'react'
import events from '../Data/EventsData'
import '../Styles/Components/Events.css'

// Logos
import { ReactComponent as DevJamsLogo } from '../Assets/Logos/DevJams Logo.svg'
import { ReactComponent as KnockathonsLogo } from '../Assets/Logos/Knockathons Logo.svg'
import { ReactComponent as DevTalksLogo } from '../Assets/Logos/DevTalks Logo.svg'
import { ReactComponent as HexathonLogo } from '../Assets/Logos/Hexathon Logo.svg'
import { ReactComponent as CTFLogo } from '../Assets/Logos/CTF Logo.svg'

// Devjams Grid SVGs
import DevJamsGridGround from '../Assets/Home/DevJamsGridGround'

export default function Events (props) {
  const homeContainerRef = useRef(null)
  const theme = props.darkTheme ? 'dark' : 'light'

  // Add auto-rows-10 if you want grid masonry layout
  return (
    <div ref={homeContainerRef} className='overflow-x-hidden'>
      <div className='cards w-screen overflow-x-auto overflow-y-hidden'>
        <div className='inline-flex gap-x-10 pb-10 px-5 lg:px-12 2xl:flex 2xl:justify-around'>
          <CurrentEventGrid event={events.ctf} theme={theme}>
            <CTFLogo className='w-52' />
          </CurrentEventGrid>
          <ComingSoonGrid event={events.knockathon} theme={theme}>
            <KnockathonsLogo className='w-52' />
          </ComingSoonGrid>
          <ComingSoonGrid event={events.designzzz} theme={theme}>
            <HexathonLogo className='w-36 my-3' />
          </ComingSoonGrid>
          <ComingSoonGrid event={events.devtalks} theme={theme}>
            <DevTalksLogo className='w-40' />
          </ComingSoonGrid>
        </div>
      </div>
      <DevJamsGrid
        event={events.devjams}
        theme={theme}
        darkTheme={props.darkTheme}
      />
    </div>
  )
}

const DevJamsGrid = (props) => {
  const theme = props.theme
  const { dateRange, month } = props.event

  return (
    <div
      className={`grid--${theme} coming-soon-grid--${theme} ${events.devjams.class}--${theme} mx-5 rounded-3xl relative shadow-md sm:rounded-3xl overflow-hidden xl:mx-12`}
    >
      <div className='grid md:grid-cols-2 place-items-center pt-5 sm:py-5 px-10 relative z-10'>
        <div className='flex flex-col items-center md:items-start'>
          <DevJamsLogo className='w-40 sm:w-72 h-auto py-5' />
          <div
            onClick={() => window.open('./Brochure.pdf')}
            className={`cursor-pointer flex justify-center md:justify-start gap-x-2 ${
              props.darkTheme
                ? 'text-gray-100 hover:text-white'
                : 'text-jams_blue hover:text-blue-600'
            } md:text-xl lg:text-2xl font-semibold items-center md:px-0 py-2 md:pb-4 md:pt-0`}
          >
            <span>Download Brochure</span>
            <ChervonRight />
          </div>
        </div>
        <div className='text-jams_red grid font-bold gap-y-1 place-items-center pt-5'>
          <div className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            {dateRange}
          </div>
          <div className='text-sm sm:text-base lg:text-lg xl:text-xl'>
            {month}
          </div>
          <div className='grid justify-items-end'>
            <button className='bg-red-100 border-2 cursor-default border-jams_red cur px-10 py-2 font-bold grid-btn'>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
      <DevJamsGridGround className='devjams-ground w-full opacity-40' />
    </div>
  )
}

const CurrentEventGrid = (props) => {
  const { event, theme } = props
  const { date, content, link } = event

  return (
    <div
      className={`grid--${theme} register-grid--${theme} w-80 pt-6 relative shadow-md rounded-3xl overflow-hidden`}
    >
      <div className='content-container'>
        <div className='h-56 grid gap-y-4'>
          <div className='grid place-items-center gap-y-4'>
            {props.children}
            <div className='text-jams_red font-bold'>{date}</div>
          </div>
          <div className={`content--${theme}`}>{content}</div>
        </div>
        <div className='text-center'>
          <a href={link || '#'} rel='noreferrer' target='_blank'>
            <button className={`btn__register--${theme} grid-btn`}>
              Register
            </button>
          </a>
        </div>
      </div>
      {/* circles */}
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <Circles info={props.event} theme={theme} />
      </div>
    </div>
  )
}

const ComingSoonGrid = (props) => {
  const { theme, event } = props
  const { date, content } = event

  return (
    <div
      className={`relative grid--${theme} coming-soon-grid--${theme} w-80 pt-6 2xl:pt-3 relative shadow-md rounded-3xl overflow-hidden`}
    >
      <div className='content-container'>
        <div className='h-56 grid gap-y-4'>
          <div className='grid place-items-center gap-y-4'>
            {props.children}
            <div className='text-jams_red font-bold'>{date}</div>
          </div>
          <div className={`content--${theme}`}>{content}</div>
        </div>
        <div className='text-center'>
          <div
            className={`btn__coming-soon--${theme} absolte bottom-4 grid-btn`}
          >
            Coming Soon
          </div>
        </div>
      </div>
      <div className='absolute top-0 bottom-0 right-0 left-0'>
        <Circles info={props.event} theme={theme} />
      </div>
    </div>
  )
}

const Circles = (props) => {
  const { theme, info } = props
  const { coords, classname } = info

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

const ChervonRight = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-4 w-4'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 5l7 7-7 7'
      />
    </svg>
  )
}
