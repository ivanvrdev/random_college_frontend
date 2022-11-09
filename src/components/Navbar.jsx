import React from 'react'
import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className='nav w-25'>
          <OffCanvasToggler />
          <a href="#" className="navbar-brand ms-3">Materia</a>
        </div>
        <ul className="nav w-25">
          <li className="nav-item">
            <a href="#" className='nav-link text-reset'>
              Novedades
            </a> 
          </li>
          <li className="nav-item">
            <a href="#" className='nav-link text-reset'>
              Actividades
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className='nav-link text-reset'>
              Personas
            </a>
          </li>
        </ul>
        <div className="w-25 d-flex justify-content-end">
          <div className="dropstart">
            <Avatar 
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{cursor: 'pointer'}}
            />
            <ul className="dropdown-menu">
              <li className="dropdown-item">Mi perfil</li>
              <li className="dropdown-item">Cerrar sesión</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar