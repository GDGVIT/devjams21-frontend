import React, { useRef } from 'react'
import Baner from '../Components/Baner'

const SponsorCard = (props) => {
  return (
    <div className='w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-white shadow-lg rounded-2xl' />
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
          <div className='grid gap-8 sm:gap-16 grid-cols-2 xl:grid-cols-4 sm:pb-16 md:pb-10 pt-28 md:pt-32'>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
          </div>
        </div>
      </div>
    </div>
  )
}
