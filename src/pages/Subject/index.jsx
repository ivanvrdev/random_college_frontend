import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Banner from '../../components/Banner'

const Subject = ({subject}) => {
  return (
    <Banner header={'a'} subHeader={'b'}/>
  )
}

const mapStateToProps = state => {
  return {
    subject: state.subjects.selected
  }
}

export default connect(mapStateToProps)(Subject)