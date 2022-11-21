import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubjects } from '../../redux/actions/subjects'

import Subject from './components/Subject'

const Subjects = ({userId, list, getSubjects}) => {
  
  useEffect(()=>{
    getSubjects(userId)
  }, [])
  
  return (
    <div className="row">
      {list.map((subject, index)=> <Subject key={index} {...subject} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userId: state.session.user._id,
    list: state.subjects.list
  }
}

export default connect(mapStateToProps, {getSubjects})(Subjects)