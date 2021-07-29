import React, { useEffect, useRef } from 'react'
import { resizing } from '../Utils/MasonryLayout'

export default function Events () {
  const homeContainerRef = useRef(null)

  useEffect(() => {
    const { resizeGridItem } = resizing()
    const masonrify = () => resizeGridItem(homeContainerRef.current)
    window.addEventListener('resize', masonrify)

    masonrify()

    return () => {
      window.removeEventListener('resize', masonrify)
    }
  }, [])

  return (
    <div ref={homeContainerRef} className='events-container'>
      <div className='event h-96 col-span-2'>DevJams</div>
      <div className='event h-40'>DevJams</div>
      <div className='event h-96'>DevJams</div>
      <div className='event h-72'>DevJams</div>
      <div className='event h-56'>DevJams</div>
      <div className='event col-span-full h-60'>DevJams</div>
    </div>
  )
}
