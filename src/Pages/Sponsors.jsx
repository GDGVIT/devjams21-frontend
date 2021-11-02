import React, { useRef, useState, useEffect } from 'react'
import Baner from '../Components/Baner'
import DigitalOcean from '../Assets/Logos/Sponsors/DigitalOcean.svg'
import HashiCorp from '../Assets/Logos/Sponsors/HashiCorp.svg'
import Egghead from '../Assets/Logos/Sponsors/Eggheadio.svg'
import _1Password from '../Assets/Logos/Sponsors/1Password.svg'
import Framer from '../Assets/Logos/Sponsors/Framer.svg'
import Replit from '../Assets/Logos/Sponsors/replit.png'
import EchoAR from '../Assets/Logos/Sponsors/EchoAR.png'
import Voiceflow from '../Assets/Logos/Sponsors/Voiceflow.png'
import Taskade from '../Assets/Logos/Sponsors/Taskade.png'
import Groww from '../Assets/Logos/Sponsors/Groww.png'
import Deepnote from '../Assets/Logos/Sponsors/Deepnote.png'
import KumoSpace from '../Assets/Logos/Sponsors/KumoSpace.png'
import HackTheBox from '../Assets/Logos/Sponsors/HackTheBox.png'
import Ren from '../Assets/Logos/Sponsors/Ren.png'
import Genxyz from '../Assets/Logos/Sponsors/genxyz.png'
import Kaspersky from '../Assets/Logos/Sponsors/Kaspersky.png'
import GFG from '../Assets/Logos/Sponsors/GFGlogo.png'
import Agora from '../Assets/Logos/Sponsors/agoraLogo.svg'
import Alchemy from '../Assets/Logos/Sponsors/Alchemy.svg'
import Sketch from '../Assets/Logos/Sponsors/Sketch.svg'
import TheDappList from '../Assets/Logos/Sponsors/TheDappList.svg'
import CrowdStrike from '../Assets/Logos/Sponsors/CrowdStrike.png'
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

const CrowdstrikeInfoModal = ({ theme, crowdstrikeInfoModalRef }) => {
  return (
    <div className='z-60 flex md:h-full'>
      <div
        ref={crowdstrikeInfoModalRef}
        className={`my-5 mx-5 h-full md:h-auto md:mx-auto md:my-auto rounded-2xl shadow-lg pt-10 md:pt-14 px-8 md:px-14 pb-10 lg:pb-14 font-sora md:w-5/6 lg:w-2/3 ${
          theme ? 'bg-jams_dark_blue text-white' : 'bg-white'
        }`}
      >
        <h2 className='text-2xl sm:text-3xl font-semibold mb-5 md:mb-8'>
          <span className='border-b-4 border-jams_blue'>CrowdStrike</span>
        </h2>
        <p className='text-sm leading-relaxed text-justify mb-3 xl:text-lg'>
          CrowdStrike is a leading cybersecurity company protecting customers from all cyber threats by leveraging its Security Cloud to stop breaches.
          From its inception in 2011, CrowdStrike was created as a different kind of cybersecurity company.
          Cloud-native, CrowdStrike immediately brought a threat perspective, effectiveness, scalability, and flexibility never seen before in the industry – seamlessly aligning People, Technology, and Processes.
          And it doesn’t stop there.
        </p>
        <p className='text-sm leading-relaxed text-justify mb-3 xl:text-lg'>
          At CrowdStrike we’re on a mission - to stop breaches. Our ground breaking technology, services delivery, and intelligence gathering together with our innovations in machine learning and behavioural-based detection, allow our customers to not only defend themselves, but do so in a future-proof manner.
          Because of that we’ve earned numerous honours and top rankings for our technology, organization and talent.
          Our culture was purpose-built to be remote first, and we offer flexible work arrangements to help our people manage their personal and professional lives in a way that works for them.
        </p>
        <p className='text-sm leading-relaxed text-justify mb-6 xl:text-lg'>
          If you’re ready to work on unrivalled technology with a team that makes a difference every day, let’s talk!
        </p>
        <div className='flex flex-col md:flex-row justify-evenly'>
          <a
            target='_blank' rel='noopener noreferrer'
            href='https://www.crowdstrike.com/'
            className='bg-jams_blue rounded-md text-sm px-6 mb-3 md:mb-0 text-center lg:px-12 py-3 font-semibold text-white'
          >
            Read More
          </a>
          <a
            target='_blank' rel='noopener noreferrer'
            href='https://www.crowdstrike.com/careers/'
            className='bg-jams_blue rounded-md text-sm px-6 text-center lg:px-12 py-3 font-semibold text-white'
          >
            Careers
          </a>
        </div>
      </div>
    </div>
  )
}

const GrowwInfoModal = ({ theme, growwInfoModalRef }) => {
  return (
    <div className='z-60 flex md:h-full'>
      <div
        ref={growwInfoModalRef}
        className={`my-5 mx-5 h-full md:h-auto md:mx-auto md:my-auto rounded-2xl shadow-lg pt-10 md:pt-14 px-8 md:px-14 pb-10 lg:pb-14 font-sora md:w-5/6 lg:w-2/3 ${
          theme ? 'bg-jams_dark_blue text-white' : 'bg-white'
        }`}
      >
        <h2 className='text-2xl sm:text-3xl font-semibold mb-5 md:mb-8'>
          <span className='border-b-4 border-jams_blue'>Groww</span>
        </h2>
        <p className='text-sm leading-relaxed text-justify mb-3 xl:text-lg'>
          We are making finance simple. For millions in India.
        </p>
        <p className='text-sm leading-relaxed text-justify mb-3 xl:text-lg'>
          Groww is on a mission to democratize access to financial services for millions of Indians responsibly. We are a customer-first company.
        </p>
        <p className='text-sm leading-relaxed text-justify mb-6 xl:text-lg'>
          We believe in crafting the best and most delightful user experience for our customers. And we leverage first principle thinking and technology to solve problems at scale. If this excites you, join us.
        </p>
        <div className='flex flex-col md:flex-row justify-center'>
          <a
            target='_blank' rel='noopener noreferrer'
            href='https://groww.in/'
            className='bg-jams_blue rounded-md text-sm px-6 mb-3 md:mb-0 text-center lg:px-12 py-3 font-semibold text-white'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Sponsors (props) {
  const [crowdstrikeInfoModalOpen, setCrowdstrikeInfoModalOpen] = useState(false)
  const [growwInfoModalOpen, setGrowwInfoModalOpen] = useState(false)
  const crowdstrikeInfoModalRef = useRef(null)
  const growwInfoModalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        crowdstrikeInfoModalRef &&
        crowdstrikeInfoModalRef.current &&
        !crowdstrikeInfoModalRef.current.contains(event.target)
      ) {
        setCrowdstrikeInfoModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [crowdstrikeInfoModalRef, setCrowdstrikeInfoModalOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        growwInfoModalRef &&
        growwInfoModalRef.current &&
        !growwInfoModalRef.current.contains(event.target)
      ) {
        setGrowwInfoModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [growwInfoModalRef, setGrowwInfoModalOpen])

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
        {
          crowdstrikeInfoModalOpen && (
            <div className='fixed top-0 left-0 z-50 flex h-full w-screen overflow-y-auto  transition-all ease-in-out duration-500'>
              <div className={`absolute opacity-70 z-50 ${props.darkTheme ? 'bg-gray-400' : 'bg-black'} h-screen w-full`} />
              <div className='z-50 h-screen overflow-y-auto m-auto'>
                <CrowdstrikeInfoModal theme={props.darkTheme} crowdstrikeInfoModalRef={crowdstrikeInfoModalRef} />
              </div>
            </div>
          )
        }
        {
          growwInfoModalOpen && (
            <div className='fixed top-0 left-0 z-50 flex h-full w-screen overflow-y-auto  transition-all ease-in-out duration-500'>
              <div className={`absolute opacity-70 z-50 ${props.darkTheme ? 'bg-gray-400' : 'bg-black'} h-screen w-full`} />
              <div className='z-50 h-screen overflow-y-auto m-auto'>
                <GrowwInfoModal theme={props.darkTheme} growwInfoModalRef={growwInfoModalRef} />
              </div>
            </div>
          )
        }

        <div className='m-auto z-20 font-sora w-5/6 xl:w-4/6'>
          <div className='sm:pb-16 md:pb-10 pt-24 md:pt-28'>
            {/* Diamond Sponsors */}
            <div className='text-center'>
              <div className={`${props.darkTheme ? 'bg-indigo-400' : 'bg-blue-700'} text-white md:w-2/3 lg:w-1/2 mx-auto px-5 py-3 rounded-md mb-7`}>
                <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>Diamond Sponsors</h1>
              </div>
              <div className='grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 mb-14 md:mb-20'>
                <div
                  onClick={() => setCrowdstrikeInfoModalOpen(true)}
                  className='flex items-center justify-center w-full h-28 sm:h-36 lg:h-56 bg-gray-100 shadow-lg rounded-xl cursor-pointer xl:col-start-2 xl:col-span-2'
                >
                  <img
                    src={CrowdStrike}
                    className='w-32 sm:w-36 lg:w-56 h-auto mx-3'
                    alt='CrowdStrike'
                  />
                </div>
                <div
                  onClick={() => setGrowwInfoModalOpen(true)}
                  className='flex items-center justify-center w-full h-28 sm:h-36 lg:h-56 bg-gray-100 shadow-lg rounded-xl cursor-pointer xl:col-span-2'
                >
                  <img
                    src={Groww}
                    className='w-32 sm:w-36 lg:w-56 h-auto mx-3'
                    alt='CrowdStrike'
                  />
                </div>
                <div className='xl:col-start-2 xl:col-span-2'>
                  <SponsorCard image={Alchemy} name='Alchemy' website='https://www.alchemy.com/' />
                </div>
                <div className='xl:col-span-2'>
                  <SponsorCard image={Ren} name='Ren' website='https://renproject.io/' />
                </div>
              </div>
            </div>

            {/* Platinum */}
            <div className='text-center'>
              <div className={`${props.darkTheme ? 'bg-indigo-400' : 'bg-blue-700'} text-white md:w-2/3 lg:w-1/2 mx-auto px-5 py-3 rounded-md mb-7 w-auto`}>
                <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>Platinum Sponsors</h1>
              </div>
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
              <div className={`${props.darkTheme ? 'bg-indigo-400' : 'bg-blue-700'} text-white md:w-2/3 lg:w-1/2 mx-auto px-5 py-3 rounded-md mb-7 w-auto`}>
                <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>Bronze Sponsors</h1>
              </div>
              <div className='grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-5 xl:grid-cols-3 mb-14 md:mb-20'>
                <div className='md:col-start-2 md:col-span-3 xl:col-span-1 xl:col-start-2 '>
                  <SponsorCard image={TheDappList} name='The Dapp List' website='https://thedapplist.com/' />
                </div>
              </div>
            </div>
            {/* Other Sponsors */}
            <div className='text-center'>
              <div className={`${props.darkTheme ? 'bg-indigo-400' : 'bg-blue-700'} text-white md:w-2/3 lg:w-1/2 mx-auto px-5 py-3 rounded-md mb-7 w-auto`}>
                <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>Other Sponsors</h1>
              </div>
              <div className='grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-10'>
                <SponsorCard image={KumoSpace} name='KumoSpace' website='https://www.kumospace.com/' />
                <SponsorCard image={DigitalOcean} name='Digital Ocean' website='https://www.digitalocean.com/' />
                <SponsorCard image={Kaspersky} name='Kaspersky' website='https://www.kaspersky.co.in/' />
                <SponsorCard image={Replit} name='Replit' website='https://replit.com/' />
                <SponsorCard image={GFG} name='GFG' website='https://www.geeksforgeeks.org/' />
                <SponsorCard image={EchoAR} name='EchoAR' website='https://www.echoar.xyz/' />
                <SponsorCard image={Voiceflow} name='Voiceflow' website='https://www.voiceflow.com/' />
                <SponsorCard image={HashiCorp} name='HashiCorp' website='https://www.hashicorp.com/' />
                <SponsorCard image={Taskade} name='Taskade' website='https://www.taskade.com/' />
                <SponsorCard image={_1Password} name='1Password' website='https://1password.com/' />
                <SponsorCard image={Framer} name='Framer' website='https://www.framer.com/' />
                <SponsorCard image={Genxyz} name='Genxyz' website='https://gen.xyz/' />
              </div>
            </div>
            <div className='grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-6 mb-10'>
              <div className='md:col-span-2'>
                <SponsorCard image={Egghead} name='Egghead' website='https://egghead.io/' />
              </div>
              <div className='md:col-span-2'>
                <SponsorCard image={HackTheBox} name='HackTheBox' website='https://www.hackthebox.eu/' />
              </div>
              <div className='col-span-2'>
                <SponsorCard image={Sketch} name='Sketch' website='https://www.sketch.com/' />
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
