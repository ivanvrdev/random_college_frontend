import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { findUser, getUserByUsername } from '../../redux/actions/users'

import Avatar from '../../components/Avatar'

const Profile = ({user, list, selected, findUser, getUserByUsername}) => {

  const { username } = useParams()

  const [data, setData] = useState(null)

  useEffect(()=>{

    if(!username){
      setData(user)
      return
    }

    if(list.length === 0) {
      getUserByUsername(username)
      return
    }

    findUser(username)
  }, [])

  useEffect(()=>{
    if(!selected) return

    setData(selected)
  }, [selected])

  if(!data) return null

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Avatar style={{width: 90, height: 90}} src={data.profile.avatar}/>
      </div>
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  const { list, selected } = state.users
  const { user } = state.session
  return { list, selected, user}
}

export default connect(mapStateToProps, {findUser, getUserByUsername})(Profile)