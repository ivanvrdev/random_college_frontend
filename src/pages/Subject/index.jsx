import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'

import { getSubjectById } from '../../redux/actions/subjects'

const Subject = ({subject, getSubjectById}) => {

  const { subjectId } = useParams()

  useEffect(()=>{
    if(!subject){
      getSubjectById(subjectId)
    }
  }, [])

  return (
    subject ?
    <Banner header={subject.name} subHeader={subject.degrees[0].name}/> :
    JSON.stringify(subject)
  )
}

const mapStateToProps = state => {
  return {
    subject: state.subjects.selected
  }
}

export default connect(mapStateToProps, {getSubjectById})(Subject)