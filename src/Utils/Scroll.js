export function moveIntoView (setBodyRender, history) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  setTimeout(() => {
    setBodyRender(false)
  }, 1000)
  setTimeout(() => {
    history.push('/about')
    setBodyRender(true)
  }, 3000)
}
