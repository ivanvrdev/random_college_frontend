import React from 'react'
import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

const Navbar = () => {
  return (
    <nav className="navbar pb-0 bg-light fixed-top w-100">
      <div className="container-fluid">
        <div className="nav pb-2">
          <OffCanvasToggler />
        </div>
        <a href="#" className="navbar-brand ms-3 fw-bold">Materia</a>
        <div className="d-flex justify-content-end">
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