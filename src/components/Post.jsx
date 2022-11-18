import React from 'react'
import { connect } from 'react-redux'

import Avatar from './Avatar'

import { formatDate } from '../utils/date'

import '../styles/post.css'

const Post = ({auth, sessionAvatar, content, author, creation_date, comments}) => {
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
        {
          comments.length > 0 &&
          <ul className="list-group list-group-flush">
            {
              comments.map((comment, index) => 
              <li className='list-group-item' key={index}>
                <div className="d-flex align-items-center">
                  <Avatar 
                    style={{height: 30, width: 30}}
                    src={comment.author.profile.avatar}
                  />
                  <p className='mb-0 ms-1 fw-semibold'>{`${comment.author.profile.first_name} ${comment.author.profile.last_name}`}</p>
                  <p className='mb-0 ms-1 text-secondary'>{formatDate(comment.creation_date)}</p>
                </div>
                <p className='mb-0'>{comment.description}</p>
              </li>
              )
            }
          </ul>
        }
        {
          auth &&
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
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  sessionAvatar: state.session.user?.profile.avatar,
  auth: state.session.auth
})

export default connect(mapStateToProps)(Post)