import React from 'react'
import { Link } from 'react-router-dom'


import Avatar from './Avatar'

const User = (props) => {
  return (
    <li className="list-group-item">
      <Link to={`/profile/${props.username}`} className='text-reset text-decoration-none'>
        <div className="d-flex align-items-center">
          <Avatar src={props.profile.avatar} />
          <p className='ms-3 mb-0'>{
            props.profile.first_name && props.profile.last_name ? 
            `${props.profile.first_name} ${props.profile.last_name}` :  
            props.username
          }</p>
        </div>
      </Link>
    </li>
  )
}

export default User