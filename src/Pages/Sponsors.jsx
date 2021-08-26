import React, { useRef } from 'react'
import Baner from '../Components/Baner'

const SponsorCard = (props) => {
  return (
    <div className='w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-white shadow-lg rounded-2xl' />
  )
}

export default function Sponsors () {
  const contentRef = useRef(null)
  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Baner color='#3B7DED' title='Sponsors' handleScroll={handleScroll} />
      <div className='flex w-screen h-screen' ref={contentRef}>
        <div className='m-auto z-20'>
          <div className='grid gap-8 sm:gap-12 md:gap-16 grid-cols-2 xl:grid-cols-4 sm:pb-16 md:pb-10 pt-24 md:pt-28'>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
          </div>
          <button className='mx-auto block bg-blue-600 w-full lg:w-1/2 py-4 rounded-md text-white text-lg md:text-2xl font-semibold font-sora mb-8 mt-6 md:mt-0 md:mb-4'>Sponsor Us</button>
        </div>
      </div>
    </div>
  )
}
