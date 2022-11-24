import React from 'react'
import DefaultAvatar from '../assets/avatar.png'

const Avatar = ({src, width = 30, height = 30,...restOfProps}) => {
  return (
    <img 
      src={src || DefaultAvatar} 
      alt="avatar" 
      className="rounded-circle m-1" 
      width={width} 
      height={height}
      {...restOfProps}
    />
  )
}

export default Avatar