import '../Styles/Components/Events.css'

const SpeakerCard = ({ speaker, theme, ...props }) => {
  const { name, date, content, route } = speaker

  const handleRouting = () => {
    window.open(route, '_blank')
  }

  return (
    <>
      <div className={`relative grid--${theme} coming-soon-grid--${theme} w-80 pt-4 border-2 border-blue-400 shadow-md rounded-xl sm:rounded-3xl overflow-hidden`}>
        <div className='content-container'>
          <div className='grid gap-y-4 h-60'>
            <div className='grid place-items-center gap-y-4'>
              {props.children}
              <div className={`content--${theme} font-bold`}>{name}</div>
            </div>
            <div className={`content--${theme} text-center`}>{content}</div>
            <div className='text-jams_red text-center'>{date}</div>
          </div>
          <div
            onClick={handleRouting}
            className={`btn__register--${theme} grid-btn hover:bg-jams_red text-center cursor-pointer`}
          >
            LinkedIn
          </div>
        </div>
      </div>
    </>
  )
}

export default SpeakerCard
