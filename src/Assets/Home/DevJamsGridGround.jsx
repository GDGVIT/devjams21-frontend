import React from 'react'

const DevJamsGridGround = (props) => {
  const { theme } = props

  return (
    <svg
      className='devjams-ground w-full'
      viewBox='0 0 1660 154'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1454 30.5C1596 6.1 1660.83 0 1675.5 0V196H-9V124C130.167 116.167 425.3 101 492.5 103C576.5 105.5 845 68 966 56C1087 44 1276.5 61 1454 30.5Z'
        fill={theme === 'light' ? '#D0FFC5' : '#30FF00'}
        fillOpacity={theme === 'light' ? '1' : '0.05'}
      />
    </svg>
  )
}

export default DevJamsGridGround
