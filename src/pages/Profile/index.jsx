import React from 'react'
import { connect } from 'react-redux'

const Profile = ({username, profile}) => {
  return (
    <div>
      <p className="fs-2">Mi datos</p>
      <img 
        src={profile.avatar} 
        alt={username}
        width={100}
        height={100}
        className='rounded-circle m-2' 
      />
    </div>
  )
}

const mapStateToProps = state => {
  const { data } = state.user
  return data
}

export default connect(mapStateToProps)(Profile)