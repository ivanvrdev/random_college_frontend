import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

import { logout } from '../redux/actions/session'

const Navbar = ({user, token, logout}) => {
  return (
    <nav className="navbar bg-light fixed-top w-100">
      <div className="container-fluid">
        <div className="d-flex justify-content-start">
          <OffCanvasToggler />
          <a href='#' className="navbar-brand fw-bold ms-3">Materia</a>
        </div>
        <div className="d-flex justify-content-end">
          <div className="dropstart">
            {
              token ?
              <>
                <Avatar 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{cursor: 'pointer'}}
                  src={user.profile.avatar}
                />
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link 
                      to='/profile/me' 
                      className='text-reset text-decoration-none'
                    >
                      Mi perfil
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link 
                      to='/' 
                      className='text-reset text-decoration-none'
                      onClick={logout}
                    >
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </> : 
              <div className="nav">
                <Link to='/login' className='nav-link fw-semibold text-reset'>Iniciar sesión</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => state.session

export default connect(mapStateToProps, {logout})(Navbar)