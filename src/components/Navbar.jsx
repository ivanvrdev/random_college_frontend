import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { signOut } from '../redux/userSlice'

const NavItemSesion = () => {
    
    const dispatch = useDispatch()
    
    const { token, ...user } = useSelector(state => state.user)
    
    const handleSignOut = () => dispatch(signOut())

    if(!token){
        return (
            <div className="nav-item">
                <Link to='/signIn' className='nav-link'>Iniciar sesión</Link>
            </div>                
        )
    }

    return (
        <div className="navbar-nav mb-lg-0 pe-5">
            <div className="nav-item dropdown pe-5">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.username}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={handleSignOut}>Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    )
}

const NavItem = ({path, name}) => {

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
        <li className='nav-item'>
            <Link to={path} className={'nav-link' + (isActive ? ' active' : '')}>
                {name}
            </Link>
        </li>
    )
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Instituto Random</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavItem path='/' name='Inicio'/>
                    <NavItem path='/subjects' name='Materias'/>
                    <NavItem path='/signUp' name='Crear usuario'/>
                </ul>
                <NavItemSesion />
            </div>
        </div>
    </nav>
  )
}

export default Navbar