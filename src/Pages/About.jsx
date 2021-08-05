import React from 'react'
import '../Styles/About.css'

export default function About (props) {
  return (
    <div>
      <div className={`p-10 font-sora subpixel-antialiased 2xl:p-24 ${props.theme && 'about-content'}`}>
        <h1 className='text-center text-4xl font-semibold mt-8 mb-12  2xl:text-5xl'>About</h1>
        <div className='my-24 mx-8 grid grid-cols-5'>
          <div className='col-span-5 md:col-span-4 lg:col-span-3'>
            <h2 className='text-2xl font-semibold mb-8 2xl:text-3xl'>DevJams'21</h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>DevJams is one of a kind hackathon conducted by Developer Student Clubs VIT every year to encourage tech enthusiasts from across the country to develop their ideas for the future. The hackathon focuses on providing students and upcoming entrepreneurs with a platform to develop, compete, network and present their ideas to solve real-world problems. We have been successfully conducting DevJams (previously known as Devfest) for 5 years now. DevJams’20 will be the sixth edition through which we hope to bring innovative minds from all around the country under one banner.</p>
          </div>
        </div>
        <div className='my-36 mx-8 grid grid-cols-5'>
          <div className='col-span-5 md:col-start-3'>
            <h2 className='text-2xl text-start font-semibold mb-8 xl:text-2xl 2xl:text-3xl'>About DSC</h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>DSC VIT powered by Google Developers is a student community at VIT Vellore. We strive to bring about technological innovations among students and we do so by providing a platform for them to exhibit their talents. We are a group of passionate designers, developers and managers who work together to bring about collaborative results that better the lives of everyone around us.</p>
          </div>
        </div>
        <div className='my-24 mx-8 grid grid-cols-5'>
          <div className='col-span-5 md:col-span-4 lg:col-span-3'>
            <h2 className='text-2xl font-semibold mb-8 2xl:text-3xl'>About VIT</h2>
            <p className='text-md leading-relaxed xl:text-lg 2xl:text-xl'>Vellore Institute of Technology, Vellore VIT, Vellore is one of the top-rated engineering colleges in India. Diversity is the strongest aspect of the institute and the students from various states and nations, the key to its reputation. The university works on ideas and executes tasks of different domains under Clubs and Chapters.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
