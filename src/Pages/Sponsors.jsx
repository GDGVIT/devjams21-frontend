import React from 'react'
import Baner from '../Components/Baner'

const SponsorCard = (props) => {
  return (
    <div className='h-56 w-56 bg-white shadow-lg rounded-2xl' />
  )
}

export default function Sponsors () {
  return (
    <div className='z-40'>
      <Baner color='#3B7DED' title='Sponsors' />
      <div className='flex w-screen h-screen pb-5'>
        <div className='m-auto z-50'>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4'>
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
