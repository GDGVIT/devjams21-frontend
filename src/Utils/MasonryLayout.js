// MASONRY
const resizing = () => {
  const resizeGridItem = (grid) => {
    if (grid) {
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      )
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      )
      grid.style.gridAutoRows = 'auto'
      grid.style.alignItems = 'self-start'
      grid.querySelectorAll('.event').forEach((item) => {
        item.style.gridRowEnd = `span ${Math.ceil(
          (item.clientHeight + rowGap) / (rowHeight + rowGap)
        )}`
      })
      grid.removeAttribute('style')
    }
  }

  return { resizeGridItem }
}

export { resizing }
