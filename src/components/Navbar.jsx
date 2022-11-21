import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

import { logout } from '../redux/actions/session'

const Navbar = ({user, token, subject, logout}) => {
  
  const { pathname } = useLocation()
  
  const [brandName, setBrandName] = useState('Inicio')

  const getBrand = (pathname) => {
    if(pathname === '/') return 'Inicio'

    if(pathname === '/subjects') return 'Materias'
    
    if(pathname === '/profile/me') return 'Mi perfil'

    if(pathname.includes('subject')) return subject?.name

    return ''
  }

  useEffect(()=>{
    setBrandName(getBrand(pathname))
  }, [pathname, subject])

  return (
    <nav className="navbar bg-light fixed-top w-100">
      <div className="container-fluid">
        <div className="d-flex justify-content-start">
          <OffCanvasToggler />
          <a href='#' className="navbar-brand fw-bold ms-3">{brandName}</a>
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

const mapStateToProps = state => ({
  user: state.session.user,
  token: state.session.token,
  subject: state.subjects.selected
})

export default connect(mapStateToProps, {logout})(Navbar)