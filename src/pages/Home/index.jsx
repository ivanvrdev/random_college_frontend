import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PostInput from '../../components/PostInput'

const Home = () => {
  return (
    <div>
      <PostInput />

    </div>
  )
}

export default connect()(Home)