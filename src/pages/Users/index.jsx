import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import User from '../../components/User'

import { getSubjectById } from '../../redux/actions/subjects'

const Users = ({subject, getSubjectById}) => {

  const { subjectId } = useParams()

  useEffect(()=>{
    if(!subject){
      getSubjectById(subjectId)
      return
    }
  }, [])

  if(!subject) return null

  return (
    <div>
      <p className='fs-3 fw-semibold'>Profesores</p>
      <ul className="list-group list-group-flush">
        {subject.teachers.map((teacher, index) => <User key={index} {...teacher.user}/>)}
      </ul>
      <p className='fs-3 fw-semibold'>Alumnos</p>
      <ul className="list-group list-group-flush">
        {subject.students.map((student, index) => <User key={index} {...student.user}/>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  subject: state.subjects.selected
})

export default connect(mapStateToProps, {getSubjectById})(Users)