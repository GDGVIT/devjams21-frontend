import React from 'react'
import Baner from '../Components/Baner'
import { ReactComponent as Vit } from '../Assets/About/vit.svg'
import { ReactComponent as Gdsc } from '../Assets/About/gdsc.svg'
import { ReactComponent as Devjams } from '../Assets/About/devjams.svg'
import '../Styles/About.css'

export default function About (props) {
  return (
    <div className='z-40 absolute'>
      <Baner color='#FC5251' title='About Us' />
      <div className='p-10 font-sora z-50 mx-4 lg:mx-28'>
        <div className={`my-24 lg:mx-8 rounded-2xl z-50 shadow-lg pt-14 px-14 pb-10 lg:pb-14 grid grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='col-span-6 lg:col-span-3 '>
            <h2 className='text-3xl font-semibold mb-8'>
              DevJams
            </h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
              DevJams is one of a kind hackathon conducted by Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.
              The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems.
              We have been successfully conducting DevJams (previously known as Devfest) for 5 years now.
              DevJams’20 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.
            </p>
          </div>
          <Devjams className='col-span-6 md:mt-3 w-full mx-auto lg:col-span-3 lg:my-auto lg:w-11/12 lg:ml-9' />
        </div>

        <div className={`my-36 lg:mx-8 rounded-2xl shadow-lg pt-14 px-14 pb-10 lg:pb-14 grid grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='col-span-6 lg:col-span-3'>
            <h2 className='text-3xl font-semibold mb-8'>
              GDSC Vit, Vellore
            </h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
              DevJams is one of a kind hackathon conducted by Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.
              The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems.
              We have been successfully conducting DevJams (previously known as Devfest) for 5 years now.
              DevJams’20 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.
            </p>
          </div>
          <Gdsc className='col-span-6 md:mt-5 w-full mx-auto lg:col-span-3 lg:my-auto lg:w-11/12 lg:ml-9' />
        </div>

        <div className={`my-24 lg:mx-8 rounded-2xl shadow-lg pt-14 px-14 pb-10 lg:pb-14 grid grid-cols-6 ${props.darkTheme ? 'about-content' : 'bg-white'}`}>
          <div className='col-span-6 lg:col-span-3 '>
            <h2 className='text-3xl font-semibold mb-8'>
              Vellore Institute of Technology , Vellore
            </h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>
              DevJams is one of a kind hackathon conducted by Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future.
              The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems.
              We have been successfully conducting DevJams (previously known as Devfest) for 5 years now.
              DevJams’20 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.
            </p>
          </div>
          <Vit className='col-span-6 w-full md:mt-8 mx-auto lg:col-span-3 lg:w-11/12 lg:my-auto lg:ml-9' />
        </div>
      </div>
    </div>
  )
}
