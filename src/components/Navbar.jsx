import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

const Navbar = ({user, token}) => {
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
                  <li className="dropdown-item">Mi perfil</li>
                  <li className="dropdown-item">Cerrar sesión</li>
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

export default connect(mapStateToProps)(Navbar)