import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import PostInput from '../../components/PostInput'
import Post from '../../components/Post'

import { getSubjectById } from '../../redux/actions/subjects'
import { getSubjectPosts } from '../../redux/actions/posts'

import { formatDate } from '../../utils/date'

const Subject = ({subject, getSubjectById, getSubjectPosts}) => {

  const { subjectId } = useParams()

  useEffect(()=>{
    if(!subject){
      getSubjectById(subjectId)
      getSubjectPosts(subjectId)
      return
    }
    console.log('continua la ejecución')
    console.log(subject)
    getSubjectPosts(subject._id)
  }, [])

  if(!subject) return null

  return (
    <>
      <Banner header={subject.name} subHeader={subject.degrees[0].name}/>
      <div className="row">
        <div className="col-lg-2 my-2">
          <div className="card">
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

const mapStateToProps = state => {
  return {
    subject: state.subjects.selected
  }
}

export default connect(mapStateToProps, {getSubjectById, getSubjectPosts})(Subject)