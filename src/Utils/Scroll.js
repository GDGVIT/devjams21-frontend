import { animations } from '../Utils/Animations'

export function moveIntoView (setBodyRender, history) {
  const { trainAnimation } = animations()

  // scroll to top
  scrollTo(0, () => {
    setBodyRender(false)
  })

  // start and end animation
  trainAnimation().then(() => {
    history.push('/about')
    setBodyRender(true)
  })
}

const scrollTo = (offset, callback) => {
  const fixedOffset = offset.toFixed()
  const onScroll = () => {
    if (window.pageYOffset.toFixed() === fixedOffset) {
      window.removeEventListener('scroll', onScroll)
      callback()
    }
  }

  window.addEventListener('scroll', onScroll)
  onScroll()
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  })
}