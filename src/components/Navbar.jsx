import React from 'react'
import Avatar from './Avatar'
import { OffCanvasToggler } from './OffCanvas'

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <OffCanvasToggler />
        <div className="dropstart">
          <Avatar data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Mi perfil</li>
            <li className="dropdown-item">Cerrar sesión</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar