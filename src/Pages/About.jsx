import React from 'react'
import { ReactComponent as Mouse } from '../Assets/Mouse.svg'
import '../Styles/About.css'

const AboutBaner = () => {
  return (
    <div className='w-screen h-screen grid place-items-center z-50 relative bottom-20'>
      <div
        style={{ background: '#FC5251' }}
        className='card-shadow grid place-items-center pt-12 px-14 pb-5 rounded-lg text-white font-circularStd text-8xl font-bold'
      >
        About Us
        <Mouse className='w-5 text-white mt-3' />
      </div>
    </div>
  )
}

export default function About (props) {
  return (
    <div className='z-50 absolute'>
      <AboutBaner />
      <div className='p-10 font-sora z-50 mx-4 lg:mx-28'>
        <div className={`my-24 lg:mx-8 rounded-2xl z-50 shadow-lg p-14 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <h2 className='text-2xl font-semibold mb-8 2xl:text-3xl'>
            DevJams'21
          </h2>
          <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
            DevJams is one of a kind hackathon conducted by Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.
            The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems.
            We have been successfully conducting DevJams (previously known as Devfest) for 5 years now.
            DevJams’20 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.
          </p>
        </div>

        <div className={`my-36 lg:mx-8 rounded-2xl shadow-lg p-14 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <h2 className='text-2xl text-start font-semibold mb-8 xl:text-2xl 2xl:text-3xl'>
            GDSC Vit, Vellore
          </h2>
          <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
            DSC VIT powered by Google Developers is a student community at VIT
            Vellore. We strive to bring about technological innovations among
            students and we do so by providing a platform for them to exhibit
            their talents. We are a group of passionate designers, developers
            and managers who work together to bring about collaborative
            results that better the lives of everyone around us.
          </p>
        </div>

        <div className={`my-24 lg:mx-8 rounded-2xl shadow-lg p-14 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <h2 className='text-2xl font-semibold mb-8 2xl:text-3xl'>
            Vellore Institute of Technology , Vellore
          </h2>
          <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
            Vellore Institute of Technology, Vellore VIT, Vellore is one of
            the top-rated engineering colleges in India. Diversity is the
            strongest aspect of the institute and the students from various
            states and nations, the key to its reputation. The university
            works on ideas and executes tasks of different domains under Clubs
            and Chapters.
          </p>
        </div>
      </div>
    </div>
  )
}
