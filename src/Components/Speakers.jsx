import { useRef } from 'react'
import SpeakerCard from './SpeakerCard'
import speakers from '../Data/SpeakersData'
import DineshPunni from '../Assets/Speakers/DineshPunni.jpeg'
import RiddhiDutta from '../Assets/Speakers/RiddhiDutta.jpeg'
import Sudhakar from '../Assets/Speakers/Sudhakar.jpeg'
import PrateekNarang from '../Assets/Speakers/PrateekNarang.jpg'
import AanshulSadaria from '../Assets/Speakers/AanshulSadaria.jpg'
import AllanCampopiano from '../Assets/Speakers/AllanCampopiano.jpeg'

const Speakers = ({ theme }) => {
  const prateekNarangRef = useRef(null)
  const aanshulSadaria = useRef(null)
  const riddhiDuttaRef = useRef(null)
  const dineshPunniRef = useRef(null)
  const sudhakarRef = useRef(null)
  const cardsRef = useRef(null)

  // useEffect(() => {
  //   if (dineshPunniRef) {
  //     const cardLeft = dineshPunniRef.current.getBoundingClientRect().left
  //     if (cardsRef) {
  //       cardsRef.current.scrollLeft = cardLeft - 20
  //     }
  //   }
  // }, [])

  return (
    <div className='overflow-hidden'>
      <div
        ref={cardsRef}
        className='cards w-screen overflow-x-auto overflow-y-hidden'
      >
        <div className='inline-flex gap-x-10 pb-10 px-5 lg:px-12'>
          <div ref={dineshPunniRef}>
            <SpeakerCard speaker={speakers.DineshPunni} theme={theme}>
              <img
                src={DineshPunni}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div ref={dineshPunniRef}>
            <SpeakerCard speaker={speakers.AllanCampopiano} theme={theme}>
              <img
                src={AllanCampopiano}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div ref={sudhakarRef}>
            <SpeakerCard speaker={speakers.Sudhakar} theme={theme}>
              <img
                src={Sudhakar}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div ref={aanshulSadaria}>
            <SpeakerCard speaker={speakers.AanshulSadaria} theme={theme}>
              <img
                src={AanshulSadaria}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div ref={prateekNarangRef}>
            <SpeakerCard speaker={speakers.PrateekNarang} theme={theme}>
              <img
                src={PrateekNarang}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div ref={riddhiDuttaRef}>
            <SpeakerCard speaker={speakers.RiddhiDutta} theme={theme}>
              <img
                src={RiddhiDutta}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers
