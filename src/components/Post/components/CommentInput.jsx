import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { MdSend } from 'react-icons/md'

import Avatar from '../../Avatar'

import { createComment } from '../../../redux/actions/posts'

import '../../../styles/post.css'

const createCommentSchema = Yup.object().shape({
  description: Yup.string()
  .required()
  .min(5)
  .max(50)
})

const CommentInput = ({userId, postId, comments, sessionAvatar, createComment}) => {
  return (
    <Formik
      initialValues={{description: ''}}
      validationSchema={createCommentSchema}
      onSubmit={(values) => {
        createComment(postId, comments, userId, values.description)
      }}
    >
      {({handleBlur, handleChange, handleSubmit, touched, errors, values})=>(
        <form onSubmit={handleSubmit}>
          <div className="card-footer d-flex post-footer">
            <Avatar 
              style={{height: 40, width: 40}} 
              src={sessionAvatar}
            />
              <div className="input-group w-100 ms-3">
                <input
                  type="text"
                  name='description'
                  className='form-control border'
                  placeholder='Agregar un comentario para la clase'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <button 
                  type='submit' 
                  className='btn btn-outline-secondary d-flex align-items-center'
                  disabled={!touched.description || errors.description}
                >
                  <MdSend />
                </button>
              </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => ({
  userId: state.session.user._id,
  sessionAvatar: state.session.user.profile.avatar
})

export default connect(mapStateToProps, {createComment})(CommentInput)