import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from './Avatar'

import '../styles/banner.css'

const Subject = ({header, image, path}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className='card mb-3'>
        <Link to={path} className='text-decoration-none text-reset'>
        <div className='card-avatar-container w-100'>
          <div className="banner-container card-banner w-100">
            <img
              src={image} 
              alt={header}
              className="card-img-top card-banner"
            />
            <div className="ms-3 banner-text card-banner d-flex flex-column justify-content-evenly">
              <p className='m-0 fs-5 text-light'>Materia</p>
              <p className='m-0 text-light'>Carrera</p>
              <p className='m-0 text-light'>Profesor</p>
            </div>
          </div>
          <Avatar className="card-avatar rounded-circle"/>
        </div>
          <div className="card-body">
            <p className="fs-6">
              Próximo parcial
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Subject