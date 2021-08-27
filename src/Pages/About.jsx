import React, { useRef } from 'react'
import Baner from '../Components/Baner'
import { ReactComponent as Vit } from '../Assets/About/vit.svg'
import { ReactComponent as Gdsc } from '../Assets/About/gdsc.svg'
import { ReactComponent as Devjams } from '../Assets/About/devjams.svg'
import '../Styles/About.css'

export default function About (props) {
  const contentRef = useRef(null)
  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='absolute'>
      <Baner color='#FC5251' title='About Us' handleScroll={handleScroll} />
      <div className='p-4 md:p-10 font-sora z-30 lg:mx-28' ref={contentRef}>
        <div className={`my-24 lg:mx-8 rounded-2xl z-30 shadow-lg pt-10 md:pt-14 px-8 md:px-14 pb-10 lg:pb-14 md:grid md:grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='md:col-span-6 lg:col-span-3 '>
            <h2 className='text-3xl font-semibold mb-5 md:mb-8'>
              DevJams
            </h2>
            <p className='text-sm leading-relaxed text-justify mb-3 xl:text-lg 2xl:text-xl'>
              DevJams is one of a kind hackathon conducted by Google Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.
              The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems.
              We have been successfully conducting DevJams (previously known as Devfest) for 5 years now.
              DevJams’21 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.
            </p>
          </div>
          <Devjams className='h-56 md:h-auto md:col-span-6 md:mt-8 w-full mx-auto lg:col-span-3 lg:my-auto lg:w-11/12 lg:ml-9' />
        </div>

        <div className={`my-36 lg:mx-8 rounded-2xl shadow-lg pt-10 md:pt-14 px-8 md:px-14 pb-10 lg:pb-14 md:grid md:grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='md:col-span-6 lg:col-span-3'>
            <h2 className='text-3xl font-semibold mb-5 md:mb-8'>
              GDSC Vit, Vellore
            </h2>
            <p className='text-sm leading-relaxed text-justify xl:text-lg 2xl:text-xl'>
              GDSC VIT powered by Google Developers is a student community at VIT Vellore.
              We strive to bring about technological innovations among students and we do so by providing a platform for them to exhibit their talents.
              We are a group of passionate designers, developers and managers who work together to bring about collaborative results that better the lives of everyone around us.
            </p>
          </div>
          <Gdsc className='h-56 md:h-auto md:col-span-6 md:mt-8 w-full mx-auto lg:col-span-3 lg:my-auto lg:w-11/12 lg:ml-9' />
        </div>

        <div className={`mt-24 mb-10 lg:mx-8 rounded-2xl shadow-lg pt-10 md:pt-14 px-8 md:px-14 pb-10 lg:pb-14 md:grid md:grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='col-span-6 lg:col-span-3 '>
            <h2 className='text-3xl font-semibold mb-5 md:mb-8'>
              Vellore Institute of Technology , Vellore
            </h2>
            <p className='text-sm leading-relaxed text-justify xl:text-lg 2xl:text-xl'>
              Vellore Institute of Technology, Vellore VIT, Vellore is one of the top-rated engineering colleges in India.
              Diversity is the strongest aspect of the institute and the students from various states and nations, the key to its reputation.
              The university works on ideas and executes tasks of different domains under Clubs and Chapters.
            </p>
          </div>
          <Vit className='h-56 md:h-auto md:col-span-6 w-full md:mt-10 mx-auto lg:col-span-3 lg:w-11/12 lg:my-auto lg:ml-9' />
        </div>
      </div>
    </div>
  )
}
