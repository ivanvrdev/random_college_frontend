import React from 'react'
import "../styles/banner.css"

const Banner = () => {
  return (
    <div className='my-4 w-100 banner-container'>
      <img 
        src="https://gstatic.com/classroom/themes/Honors.jpg" 
        alt=""
        className="rounded w-100" 
      />
      <p className='banner-text text-light mb-3 ms-3 fs-1'>Materia</p>
    </div>
  )
}

export default Banner