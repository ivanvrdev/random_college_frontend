import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Card = ({header, subHeader, image, path}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className='card'>
        <Link to={path} className='text-decoration-none text-reset'>
          <div className="banner-container">
            <img 
              src={image} 
              alt={header}
              className="w-100"
            />
            <div className="banner-text">
              <p>Hola</p>
            </div>
          </div>
          <div className="card-body">
            <p className="fs-3">
              {header}
            </p>
            <p className="fs-5">
              {subHeader}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card