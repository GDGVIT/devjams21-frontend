import anime from 'animejs/lib/anime.es'

const animations = () => {
  const trainAnimation = () => {
    return new Promise((resolve, reject) => {
      anime({
        targets: '.animation-bg',
        translateX: -3848,
        duration: 10000,
        loop: true,
        easing: 'easeInOutCubic',
        changeComplete: (anim) => {
          console.log('Animation background done')
          resolve()
        }
      })
      anime({
        targets: '.animation-city',
        translateX: -6414,
        duration: 10000,
        loop: true,
        easing: 'easeInOutCubic',
        changeComplete: (anim) => {
          console.log('Animation City done')
        }
      })
      anime({
        targets: '.animation-grass',
        translateX: -12828,
        duration: 10000,
        loop: true,
        easing: 'easeInOutCubic',
        changeComplete: (anim) => {
          console.log('Animation Grass done')
        }
      })
    })
  }

  return { trainAnimation }
}

export { animations }
