const Header = ({ darkTheme, text }) => {
  return (
    <div
      className={`${
        darkTheme ? 'bg-indigo-400' : 'bg-jams_blue'
      } text-white w-60 sm:w-80 mx-auto py-2 rounded-full mb-7`}
    >
      <div className='font-bold text-base sm:text-xl text-center'>{text}</div>
    </div>
  )
}

export default Header
