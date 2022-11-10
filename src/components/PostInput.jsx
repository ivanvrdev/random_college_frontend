import React from 'react'
import Avatar from "./Avatar"

const PostInput = () => {
  return (
    <div className="my-2">
      <div className="card shadow-sm" style={{cursor: "pointer"}}>
        <div className="card-body d-flex">
          <Avatar style={{height: 40, width: 40}}/>
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

export default PostInput