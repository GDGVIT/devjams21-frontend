import '../Styles/Components/Events.css'
import { ReactComponent as Linkedin } from '../Assets/SocialMedia/Linkedin.svg'

const SpeakerCard = ({ speaker, theme, ...props }) => {
  const { name, date, content, route } = speaker

  const handleRouting = () => {
    window.open(route, '_blank')
  }

  return (
    <>
      <div
        className={`relative grid--${theme} coming-soon-grid--${theme} w-72 pt-4 border-2 border-jams_blue shadow-md rounded-xl sm:rounded-3xl overflow-hidden`}
      >
        <div className='pt-4 pb-8'>
          <div className='grid gap-y-1 h-72'>
            <div className='grid place-items-center gap-y-6'>
              {props.children}
              <div className={`content--${theme} font-bold`}>{name}</div>
            </div>
            <div className={`content--${theme} italic text-center text-sm`}>
              {content}
            </div>
            <div className='text-jams_red text-sm text-center font-bold'>
              {date}
            </div>
          </div>
          <div
            onClick={handleRouting}
            className='cursor-pointer grid place-items-center'
          >
            <Linkedin className='w-9 h-9 rounded-none fill-current text-jams_blue' />
          </div>
        </div>
      </div>
    </>
  )
}

export default SpeakerCard
