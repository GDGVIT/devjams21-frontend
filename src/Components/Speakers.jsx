import SpeakerCard from './SpeakerCard'
import speakers from '../Data/SpeakersData'
import DineshPunni from '../Assets/Speakers/DineshPunni.jpeg'
import RiddhiDutta from '../Assets/Speakers/RiddhiDutta.jpeg'
import Sudhakar from '../Assets/Speakers/Sudhakar.jpeg'
import PrateekNarang from '../Assets/Speakers/PrateekNarang.jpg'
import AanshulSadaria from '../Assets/Speakers/AanshulSadaria.jpg'
import AllanCampopiano from '../Assets/Speakers/AllanCampopiano.jpeg'
import JasonShah from '../Assets/Speakers/JasonShah.jpeg'
import NeerajSingh from '../Assets/Speakers/NeerajSingh.jpg'
import JohnFrancis from '../Assets/Speakers/JohnFrancis.jpg'
import Saket from '../Assets/Speakers/Saket.jpg'

const Speakers = ({ theme }) => {
  return (
    <div className='overflow-hidden'>
      <div
        className='cards w-screen overflow-x-auto overflow-y-hidden'
      >
        <div className='inline-flex gap-x-10 pb-10 px-5 lg:px-12'>
          <div>
            <SpeakerCard speaker={speakers.DineshPunni} theme={theme}>
              <img
                src={DineshPunni}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.NeerajSingh} theme={theme}>
              <img
                src={NeerajSingh}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.Sudhakar} theme={theme}>
              <img
                src={Sudhakar}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.AllanCampopiano} theme={theme}>
              <img
                src={AllanCampopiano}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.JasonShah} theme={theme}>
              <img
                src={JasonShah}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.Saket} theme={theme}>
              <img
                src={Saket}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.JohnFrancis} theme={theme}>
              <img
                src={JohnFrancis}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.AanshulSadaria} theme={theme}>
              <img
                src={AanshulSadaria}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
            <SpeakerCard speaker={speakers.PrateekNarang} theme={theme}>
              <img
                src={PrateekNarang}
                alt='speaker'
                className='w-36 mt-1 rounded-full'
              />
            </SpeakerCard>
          </div>
          <div>
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
