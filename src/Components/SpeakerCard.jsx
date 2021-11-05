import '../Styles/Components/Events.css'

const SpeakerCard = ({ speaker, ...props }) => {
  const { name, content, route } = speaker

  const handleRouting = () => {
    window.open(route, '_blank')
  }

  return (
    <>
      <div className='relative grid--dark coming-soon-grid--dark w-80 pt-4 shadow-md rounded-xl sm:rounded-3xl overflow-hidden'>
        <div className='content-container'>
          <div className='grid gap-y-4 h-72'>
            <div className='grid place-items-center gap-y-4'>
              {props.children}
              <div className='text-jams_red font-bold'>{name}</div>
            </div>
            <div className='content--dark'>{content}</div>
          </div>
          <div
            onClick={handleRouting}
            className='btn__register--dark grid-btn hover:bg-jams_red text-center cursor-pointer'
          >
            LinkedIn
          </div>
        </div>
      </div>
    </>
  )
}

export default SpeakerCard
