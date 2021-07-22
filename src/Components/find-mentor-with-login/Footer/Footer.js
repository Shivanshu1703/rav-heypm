import React from 'react'
import './Footer.css'
function Footer() {
  const scrolltotop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='foot'>
      <div onClick={() => scrolltotop()}>
        Back to Top &uarr;<span className='he'></span>
      </div>
    </div>
  )
}

export default Footer
