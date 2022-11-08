import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import SessionSidebar from './SessionSidebar'

const Item = ({name, path}) => {

  const location = useLocation()

  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    if(location.pathname !== path) {
      setIsActive(false)
      return
    }

    setIsActive(true)
  }, [location])

  return (
    <li className="nav-item">
      <Link to={path} className={isActive ? "nav-link active" : "nav-link text-white"} aria-current="page">
        {name}
      </Link>
    </li>
  )
}

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '280px', height: '100vh'}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <span className="fs-4">Instituto Random</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <Item path='/' name='Inicio'/>
        <Item path='/subjects' name='Materias'/>
        <Item path='/degrees' name='Carreras'/>
        <Item path='/admin' name='Administración'/>
      </ul>
      <hr />
      <SessionSidebar />
    </div>
  )
}

export default Sidebar