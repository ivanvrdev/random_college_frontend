import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import User from '../../components/User'

import { getUsers } from '../../redux/actions/users'

const Management = ({list, getUsers}) => {

  useEffect(()=>{
    getUsers()
  }, [])

  return (
    <div>
      <p>Administración</p>
      <div className="d-flex justify-content-between">
        <p className='mb-0 fs-4'>Usuarios</p>
        <Link to='user/add' className='btn btn-primary'>Agregar</Link>
      </div>
      {
        list.length > 0 &&      
        <ul className="list-group list-group mt-3">
          {list.map((user, index) =>
            <Link key={index} to={`/profile/${user.username}`} className='text-reset text-decoration-none'>
              <User {...user} />
            </Link>
          )}
        </ul>
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { list } = state.users
  return { list }
}

export default connect(mapStateToProps, {getUsers})(Management)