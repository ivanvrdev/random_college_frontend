import React from 'react'

const Alert = ({message, type}) => {
  return (
    <div className={`alert alert-${type} my-3`} role="alert">
        {message}
    </div>
  )
}

export default Alert