const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,700'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const titillium  = new FontFaceObserver('Roboto')

  titillium.load().then(() => {
    document.documentElement.classList.add('titillium')
  })
}

export default Fonts
