import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({header, subHeader, image, path}) => {
  return (
    <div className="col-lg-6 col-md-12">
      <div className='card m-1'>
        <Link to={path} className='text-decoration-none text-reset'>
          <div className="d-flex">
            <img 
              src={image} 
              alt={header} 
              className='rounded-circle m-3' 
              width={100} 
              height={100}
            />
            <div className="mt-3">
              <p className="fs-3">
                {header}
              </p>
              <p className="fs-5">
                {subHeader}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card