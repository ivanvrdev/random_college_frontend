import React from 'react'
import Avatar from './Avatar'
import '../styles/post.css'

const Post = () => {
  return (
    <div className="my-3">
      <div className='card shadow-sm'>
        <div className='card-body'>
          <div className="d-flex">
            <Avatar style={{height: 40, width: 40}}/>
            <div className="ms-2">
              <p className="fw-semibold mb-0">Nombre usuario</p>
              <p className='mb-0'>14:37</p>
            </div>
          </div>
          <p>Cuerpo del post</p>
        </div>
        <div className="card-footer d-flex post-footer">
          <Avatar style={{height: 40, width: 40}} />
          <input 
            type="text" 
            className='border w-100 ps-3 ms-2 rounded-pill'
            placeholder='Agregar un comentario para la clase'
          />
        </div>
      </div>
    </div>
  )
}

export default Post