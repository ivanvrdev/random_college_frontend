import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getSubjectById, findStudentData } from '../../redux/actions/subjects'

const Grades = ({userId, grades, inassistence, subject, getSubjectById, findStudentData}) => {

  const { subjectId } = useParams()

  useEffect(()=>{
    if(subject) return

    getSubjectById(subjectId)  
  }, [])
  
  useEffect(()=>{
    if(!subject) return
    if(!userId) return

    findStudentData(userId)
  }, [subject, userId])

  // if(!userId) return null 
  // if(!subject) return null
  if(!grades) return null

  return (
    <div>
      <p className='fs-3 fw-semibold'>Calificaciones</p>
      <table className='table'>
        <thead className='table-secondary'>
          <tr>
            <th scope='col'>Examen</th>
            <th scope='col'>Comentario</th>
            <th scope='col'>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {
            grades &&
            grades.exams.map((exam, index) => 
              <tr key={index}>
                <td>{exam.name}</td>
                <td>{exam.comment}</td>
                <td>{exam.grade}</td>
              </tr>
            )
          }
          <tr>
            <td colSpan={2}>Promedio</td>
            <td>{grades.final}</td>
          </tr>
        </tbody>
      </table>
      <p className='fs-3 fw-semibold'>Asistencia</p>
      <table className='table table-striped'>
        <tbody>
          <tr>
            <td>Clases dictadas</td>
            <td>{subject.total_lessons}</td>
          </tr>
          <tr>
            <td>Inasistencias</td>
            <td>{inassistence}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  userId: state.session.user._id,
  subject: state.subjects.selected,
  grades: state.subjects.grades,
  inassistence: state.subjects.inassistence
})

export default connect(mapStateToProps, {getSubjectById, findStudentData})(Grades)