import React from 'react'
import { connect } from 'react-redux'

import Avatar from './Avatar'

import { formatDate } from '../utils/date'

import '../styles/post.css'

const Post = ({sessionAvatar, content, author, creation_date}) => {
  return (
    <div className="my-3">
      <div className='card shadow-sm'>
        <div className='card-body'>
          <div className="d-flex">
            <Avatar 
              style={{height: 40, width: 40}}
              src={author.profile.avatar}
            />
            <div className="ms-2">
              <p className="fw-semibold mb-0">{`${author.profile.first_name} ${author.profile.last_name}`}</p>
              <p className='mb-0 text-secondary'>{formatDate(creation_date)}</p>
            </div>
          </div>
          <p className='fw-semibold fs-5 mb-0'>{content.header}</p>
          <p className='mb-0'>{content.description}</p>
        </div>
        <div className="card-footer d-flex post-footer">
          <Avatar 
            style={{height: 40, width: 40}} 
            src={sessionAvatar}
          />
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

const mapStateToProps = state => {
  return {
    sessionAvatar: state.session.user.profile.avatar
  } 
}

export default connect(mapStateToProps)(Post)