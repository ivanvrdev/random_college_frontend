import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SessionSidebar = ({token, user, dispatch}) => {
  
  if(!token){
    return (
      <div className="nav-item">
        <Link to='/signIn' className='nav-link'>Iniciar sesión</Link>
      </div>                
    )
  }

  return (
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={user.profile.avatar} alt={user.username} width="32" height="32" className="rounded-circle me-2" />
        <strong>{user.username}</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li onClick={()=>dispatch({type: 'SIGN_OUT'})}><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) =>{
  const {token, data} = state.user
  console.log(token)
  return {token, user: data}
}

export default connect(mapStateToProps)(SessionSidebar)