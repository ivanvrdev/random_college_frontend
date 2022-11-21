import React from 'react'
import { connect } from 'react-redux'

// import { findUser, getUserByUsername } from '../../redux/actions/users'

import Avatar from '../../components/Avatar'

import { formatDate } from '../../utils/date'

const Profile = ({sessionUser}) => {

  if(!sessionUser) return null

  return (
    <>
      <div className='card mb-3'>
        <div className="card-body">
          <p className='fs-3 fw-semibold'>Información personal</p>
          <ul className="list-group list-group-flush">
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <p className='mb-0'>Foto de perfil</p>
              <Avatar style={{width: 50, height: 50}} src={sessionUser.profile.avatar}/> 
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Nombre completo</p>
              <p className='my-3 fw-semibold'>{`${sessionUser.profile.first_name} ${sessionUser.profile.last_name}`}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Fecha de nacimiento</p>
              <p className='my-3 fw-semibold'>{formatDate(sessionUser.profile.born_date)}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Sexo</p>
              <p className='my-3 fw-semibold'>{sessionUser.profile.sex}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>CUIL</p>
              <p className='my-3 fw-semibold'>{sessionUser.profile.cuil}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Nacionalidad</p>
              <p className='my-3 fw-semibold'>{sessionUser.profile.nationallity}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='card mb-3'>
        <div className="card-body">
          <p className='fs-3 fw-semibold'>Domicilios</p>
          <ul className="list-group list-group-flush">
            {
              sessionUser.profile.address.map((address, index) => 
              <li key={index} className="list-group-item">
                {`${address.city}, ${address.street_name} ${address.number}`}
              </li>)
            }
          </ul>
        </div>
      </div>
      <div className='card mb-3'>
        <div className="card-body">
          <p className='fs-3 fw-semibold'>Documentos</p>
          <ul className="list-group list-group-flush">
            {
              sessionUser.profile.documents.map((document, index) => 
              <li key={index} className="list-group-item">
                {document.description}
              </li>)
            }
          </ul>
        </div>
      </div>
      <div className='card mb-3'>
        <div className="card-body">
          <p className='fs-3 fw-semibold'>Cuenta</p>
          <ul className="list-group list-group-flush">
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Nombre de usuario</p>
              <p className='my-3 fw-semibold'>{sessionUser.username}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Contraseña</p>
              <p className='my-3 fw-semibold'>**********</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Correo electrónico</p>
              <p className='my-3 fw-semibold'>{sessionUser.email}</p>
            </li>
            <li className='list-group-item d-flex justify-content-between'>
              <p className='my-3'>Número de teléfono</p>
              <p className='my-3 fw-semibold'>{sessionUser.phone}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  sessionUser: state.session.user
})

export default connect(mapStateToProps)(Profile)