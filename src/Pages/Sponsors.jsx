import React, { useRef } from 'react'
import Baner from '../Components/Baner'
import DigitalOcean from '../Assets/Logos/Sponsors/DigitalOcean.svg'
import HashiCorp from '../Assets/Logos/Sponsors/HashiCorp.svg'
import Egghead from '../Assets/Logos/Sponsors/Eggheadio.svg'
import _1Password from '../Assets/Logos/Sponsors/1Password.svg'
import Framer from '../Assets/Logos/Sponsors/Framer.svg'
import Replit from '../Assets/Logos/Sponsors/Replit.svg'
import EchoAR from '../Assets/Logos/Sponsors/EchoAR.png'
import Voiceflow from '../Assets/Logos/Sponsors/Voiceflow.png'
import Taskade from '../Assets/Logos/Sponsors/Taskade.png'
import Qoom from '../Assets/Logos/Sponsors/Qoom.png'
import Deepnote from '../Assets/Logos/Sponsors/Deepnote.png'
import Ren from '../Assets/Logos/Sponsors/Ren.png'
import Genxyz from '../Assets/Logos/Sponsors/genxyz.png'
import Clerky from '../Assets/Logos/Sponsors/Clerky.png'
import Contact from '../Components/Contact'

const SponsorCard = (props) => {
  return (
    <div className='flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 lg:w-56 lg:h-56 bg-white shadow-lg rounded-2xl'>
      <img
        src={props.image}
        className='w-24 sm:w-32 lg:w-48 h-auto'
        alt={props.name}
      />
    </div>
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
      <div className='flex w-screen' ref={contentRef}>
        <div className='m-auto z-20'>
          <div className='grid gap-8 sm:gap-12 md:gap-16 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:pb-16 md:pb-10 pt-24 md:pt-28'>
            <SponsorCard image={DigitalOcean} name='Digital Ocean' />
            <SponsorCard image={HashiCorp} name='HashiCorp' />
            <SponsorCard image={Deepnote} name='Deepnote' />
            <SponsorCard image={EchoAR} name='EchoAR' />
            <SponsorCard image={Voiceflow} name='Voiceflow' />
            <SponsorCard image={Taskade} name='Taskade' />
            <SponsorCard image={Qoom} name='Qoom' />
            <SponsorCard image={Egghead} name='Egghead' />
            <SponsorCard image={_1Password} name='1Password' />
            <SponsorCard image={Replit} name='Replit' />
            <SponsorCard image={Framer} name='Framer' />
            <SponsorCard image={Ren} name='Ren' />
            <SponsorCard image={Genxyz} name='Genxyz' />
            <SponsorCard image={Clerky} name='Clerky' />
          </div>
          <button className='mx-auto block bg-blue-600 w-full lg:w-1/2 py-4 rounded-md text-white text-lg md:text-2xl font-semibold font-sora mb-8 mt-6 md:mt-0 md:mb-4 hover:bg-blue-800'>
            Sponsor Us
          </button>
        </div>
      </div>
      <Contact className='z-20' />
    </div>
  )
}
