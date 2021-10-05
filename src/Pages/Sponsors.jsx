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
import Deepnote from '../Assets/Logos/Sponsors/Deepnote.png'
import HackTheBox from '../Assets/Logos/Sponsors/HackTheBox.png'
import Ren from '../Assets/Logos/Sponsors/Ren.png'
import Genxyz from '../Assets/Logos/Sponsors/genxyz.png'
import Kaspersky from '../Assets/Logos/Sponsors/Kaspersky.png'
import GFG from '../Assets/Logos/Sponsors/GFGlogo.png'
import Agora from '../Assets/Logos/Sponsors/agoraLogo.svg'
import Alchemy from '../Assets/Logos/Sponsors/Alchemy.svg'
import Sketch from '../Assets/Logos/Sponsors/Sketch.svg'
import TheDappList from '../Assets/Logos/Sponsors/TheDappList.jpg'
import CrowdStrike from '../Assets/Logos/Sponsors/CrowdStrike.jpeg'
import Contact from '../Components/Contact'

const SponsorCard = (props) => {
  return (
    <a href={props.website} target='_blank' rel='noopener noreferrer'>
      <div className='flex items-center justify-center w-full h-28 sm:h-36 lg:h-56 bg-gray-100 shadow-lg rounded-xl'>
        <img
          src={props.image}
          className='w-24 sm:w-32 lg:w-48 h-auto mx-3'
          alt={props.name}
        />
      </div>
    </a>
  )
}

export default function Sponsors (props) {
  const contentRef = useRef(null)
  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='absolute'>
      <Baner color='#3B7DED' title='Sponsors' handleScroll={handleScroll} />
      <div className='flex w-screen' ref={contentRef}>
        <div className='m-auto z-20 font-sora w-5/6 xl:w-4/6'>
          <div className='sm:pb-16 md:pb-10 pt-24 md:pt-28'>
            {/* Diamond Sponsors */}
            <div className='text-center'>
              <h1 className={`font-bold mb-7 text-2xl md:text-3xl xl:text-4xl ${props.darkTheme ? 'text-white' : ''}`}>Diamond Sponsors</h1>
              <div className='grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3 mb-14 md:mb-20'>
                <SponsorCard image={CrowdStrike} name='CrowdStrike' website='https://www.crowdstrike.com/' />
                <SponsorCard image={Alchemy} name='Alchemy' website='https://www.alchemy.com/' />
                <SponsorCard image={Ren} name='Ren' website='https://renproject.io/' />
              </div>
            </div>
            {/* Platinum */}
            <div className='text-center'>
              <h1 className={`font-bold mb-7 text-2xl md:text-3xl xl:text-4xl ${props.darkTheme ? 'text-white' : ''}`}>Platinum Sponsors</h1>
              <div className='grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 mb-14 md:mb-20'>
                <div className='xl:col-start-2 xl:col-span-2'>
                  <SponsorCard image={Agora} name='Agora' website='https://www.agora.io/en/' />
                </div>
                <div className='xl:col-span-2'>
                  <SponsorCard image={Deepnote} name='Deepnote' website='https://deepnote.com/' />
                </div>
              </div>
            </div>
            {/* Bronze Sponsors */}
            <div className='text-center'>
              <h1 className={`font-bold mb-7 text-2xl md:text-3xl xl:text-4xl ${props.darkTheme ? 'text-white' : ''}`}>Bronze Sponsors</h1>
              <div className='grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-5 xl:grid-cols-3 mb-14 md:mb-20'>
                <div className='md:col-start-2 md:col-span-3 xl:col-span-1 xl:col-start-2 '>
                  <SponsorCard image={TheDappList} name='The Dapp List' website='https://thedapplist.com/' />
                </div>
              </div>
            </div>
            {/* Other Sponsors */}
            <div className='text-center'>
              <h1 className={`font-bold mb-7 text-2xl md:text-3xl xl:text-4xl ${props.darkTheme ? 'text-white' : ''}`}>Other Sponsors</h1>
              <div className='grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-10'>
                <SponsorCard image={DigitalOcean} name='Digital Ocean' website='https://www.digitalocean.com/' />
                <SponsorCard image={Kaspersky} name='Kaspersky' website='https://www.kaspersky.co.in/' />
                <SponsorCard image={Replit} name='Replit' website='https://replit.com/' />
                <SponsorCard image={GFG} name='GFG' website='https://www.geeksforgeeks.org/' />
                <SponsorCard image={EchoAR} name='EchoAR' website='https://www.echoar.xyz/' />
                <SponsorCard image={Voiceflow} name='Voiceflow' website='https://www.voiceflow.com/' />
                <SponsorCard image={HashiCorp} name='HashiCorp' website='https://www.hashicorp.com/' />
                <SponsorCard image={HackTheBox} name='HackTheBox' website='https://www.hackthebox.eu/' />
                <SponsorCard image={Taskade} name='Taskade' website='https://www.taskade.com/' />
                <SponsorCard image={_1Password} name='1Password' website='https://1password.com/' />
                <SponsorCard image={Framer} name='Framer' website='https://www.framer.com/' />
                <SponsorCard image={Egghead} name='Egghead' website='https://egghead.io/' />
              </div>
            </div>
            <div className='grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-6 mb-10'>
              <div className='md:col-start-2 md:col-span-2'>
                <SponsorCard image={Sketch} name='Sketch' website='https://www.sketch.com/' />
              </div>
              <div className='md:col-span-2'>
                <SponsorCard image={Genxyz} name='Genxyz' website='https://gen.xyz/' />
              </div>
            </div>
          </div>
          <a
            href='https://form.jotform.com/212415124747047'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-auto block text-center bg-blue-600 text-white hover:bg-blue-800 w-full lg:w-2/3 xl:w-1/2 py-4 rounded-md text-lg md:text-2xl font-semibold font-sora mt-8 md:mt-0 md:mb-4'
          >
            Sponsor Us
          </a>
        </div>
      </div>
      <Contact darkTheme={props.darkTheme} />
    </div>
  )
}
