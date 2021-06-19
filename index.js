document.addEventListener('DOMContentLoaded', function (event) {
  let colors = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D']

  let container = document.createElement('div')
  container.style.position = 'fixed'
  container.style.top = 0
  container.style.left = 0
  container.style.width = '100%'
  container.style['z-index'] = '5050'

  for (let color of colors) {
    let ribbon = document.createElement('div')
    ribbon.style['background-color'] = color
    ribbon.style.opacity = '0.8'
    ribbon.style.height = '3px'
    container.appendChild(ribbon)
  }

  document.body.appendChild(container)
})
