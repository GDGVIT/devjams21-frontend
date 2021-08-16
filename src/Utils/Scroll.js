export function moveIntoView (setBodyRender) {
  // scroll to top
  scrollTo(0, () => {
    setBodyRender(false)
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
