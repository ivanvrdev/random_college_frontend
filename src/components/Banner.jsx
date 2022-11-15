import React from 'react'
import "../styles/banner.css"

const Banner = ({src, header, subHeader}) => {
  return (
    <div className='mb-2 w-100 banner-container'>
      <img 
        src={src || "https://gstatic.com/classroom/themes/Honors.jpg"} 
        alt=""
        className="rounded w-100" 
      />
      <div className="banner-text">
        <p className='text-light mb-3 ms-3 fs-1'>{header}</p>
        <p className='text-light mb-3 ms-3 fs-3'>{subHeader}</p>
      </div>
    </div>
  )
}

export default Banner