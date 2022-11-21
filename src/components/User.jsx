import React from 'react'

import Avatar from './Avatar'

const User = (props) => {
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <Avatar src={props.profile.avatar} />
        <p className='ms-3 mb-0'>{
          props.profile.first_name && props.profile.last_name ? 
          `${props.profile.first_name} ${props.profile.last_name}` :  
          props.username
        }</p>
      </div>
    </li>
  )
}

export default User