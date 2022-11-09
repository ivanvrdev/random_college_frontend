import React from 'react'
import DefaultAvatar from '../assets/avatar.png'

const Avatar = ({...restOfProps}) => {
  return (
    <img 
      src={DefaultAvatar} 
      alt="avatar" 
      className="rounded-circle m-1" 
      width={30} 
      height={30}
      {...restOfProps}
    />
  )
}

export default Avatar