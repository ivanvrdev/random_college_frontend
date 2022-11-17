import React from 'react'
import { connect } from 'react-redux'

import Avatar from "./Avatar"

const PostInput = ({sessionAvatar}) => {
  return (
    <div className="my-2">
      <div className="card shadow-sm" style={{cursor: "pointer"}}>
        <div className="card-body d-flex">
          <Avatar 
            style={{height: 40, width: 40}}
            src={sessionAvatar}
          />
          <div className="d-flex align-items-center">
            <p className="mb-0 ms-3 text-secondary fs-6">
              Anuncia algo a la clase
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sessionAvatar: state.session.user.profile.avatar
  } 
}

export default connect(mapStateToProps)(PostInput)