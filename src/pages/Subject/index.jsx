import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import PostInput from '../../components/PostInput'
import Post from '../../components/Post'

import { getSubjectById } from '../../redux/actions/subjects'
import { getSubjectPosts, clearResponse } from '../../redux/actions/posts'

import { formatDate } from '../../utils/date'

const Subject = ({subject, postResponse, commentResponse, getSubjectById, getSubjectPosts, clearResponse}) => {

  const { subjectId } = useParams()

  useEffect(()=>{
    if(!subject){
      getSubjectById(subjectId)
      getSubjectPosts(subjectId)
      return
    }

    getSubjectPosts(subject._id)
  }, [])

  useEffect(()=>{
    if(!postResponse) return

    if(postResponse.type !== 'success') return

    getSubjectPosts(subject._id)
    clearResponse()
  }, [postResponse])

  useEffect(()=>{
    if(!commentResponse) return

    if(commentResponse.type !== 'success') return

    getSubjectPosts(subject._id)
    clearResponse()
  }, [commentResponse])

  if(!subject) return null
  if(!subject.degrees) return null

  return (
    <>
      <Banner header={subject.name} subHeader={subject.degrees[0].name}/>
      <div className="row">
        <div className="col-lg-2 my-2">
          <div className="card mb-2">
            <div className="card-body">
              <ul className="nav nav-pills flex-column">
                <li className='nav-item'>
                  <Link to='users' className='nav-link'>Personas</Link>
                </li>
                <li className='nav-item'>
                  <Link to='grades' className='nav-link'>Notas</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              {
                subject.exams_schedule.map((exam, index) => 
                  <div key={index} className="mb-1">
                    <p className='mb-0 fw-semibold'>{exam.name}</p>
                    <p className='mb-0 text-secondary'>{formatDate(exam.date)}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-12">
          <PostInput />
          {
            subject.posts &&
            subject.posts.map((post, index) => <Post key={index} {...post} />)
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  subject: state.subjects.selected,
  postResponse: state.posts.postResponse,
  commentResponse: state.posts.commentResponse
})

export default connect(mapStateToProps, {getSubjectById, getSubjectPosts, clearResponse})(Subject)