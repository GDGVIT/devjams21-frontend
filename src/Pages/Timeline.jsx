import React from 'react'
import Baner from '../Components/Baner'

export default function Timeline () {
  // const contentRef = useRef(null)
  // const handleScroll = () => {
  //   if (contentRef) {
  //     contentRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <div className='z-30 absolute'>
      <Baner color='#F9C531' title='Timeline' />
    </div>
  )
}
