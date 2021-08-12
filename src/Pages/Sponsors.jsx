import React from 'react'
import Baner from '../Components/Baner'

const SponsorCard = (props) => {
  return (
    <div className='w-24 h-24 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-white shadow-lg rounded-2xl' />
  )
}

export default function Sponsors () {
  return (
    <div className='z-40'>
      <Baner color='#3B7DED' title='Sponsors' />
      <div className='flex w-screen h-screen'>
        <div className='m-auto z-50'>
          <div className='grid gap-8 sm:gap-16 grid-cols-2 lg:grid-cols-4 sm:pb-16 lg:pb-0 lg:pt-10'>
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
