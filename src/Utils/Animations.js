import anime from 'animejs/lib/anime.es'

const animations = () => {
  const trainAnimation = () => {
    return new Promise((resolve, reject) => {
      anime({
        targets: '.animation-bg',
        translateX: -3848,
        duration: 10000,
        easing: 'easeInOutCubic',
        changeComplete: (anim) => {
          resolve()
        }
      })
      anime({
        targets: '.animation-city',
        translateX: -6414,
        duration: 10000,
        easing: 'easeInOutCubic'
      })
      anime({
        targets: '.animation-grass',
        translateX: -12828,
        duration: 10000,
        easing: 'easeInOutCubic'
      })
    })
  }

  return { trainAnimation }
}

export { animations }
