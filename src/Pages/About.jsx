import React from 'react'
import { Link } from 'react-router-dom' 
import HomeNight from '../Assets/HomeNight.svg'
import Train from '../Assets/Train.svg'
import '../Styles/About.css'

export default function About () {
  return (
    <div className=''>
      <div className='about-nav'>
        <img  className='about-background' src={HomeNight} alt='background' />
        <img className='about-train'  src={Train} alt='train' />
        <div className='about-nav-link'>
          <Link to='/timeline'>Timeline</Link>
          <Link to='/speakers'>Speakers</Link>
          <Link to='/timeline'>Sponsors</Link>
          <Link to='/faq'>FAQ</Link>
        </div>
      </div>
    </div>
  )
}
