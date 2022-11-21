import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Avatar from '../../../components/Avatar'

import { findSubject } from '../../../redux/actions/subjects'

import '../../../styles/banner.css'

const Subject = ({_id, name, degrees, teachers, lessons_schedule, banner, findSubject}) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className='card mb-3'>
        <Link 
          to={`/subjects/${_id}`} 
          className='text-decoration-none text-reset' 
          onClick={()=>{findSubject(_id)}}>
          <div className='card-avatar-container w-100'>
            <div className="banner-container card-banner w-100">
              <img
                src={banner || "https://gstatic.com/classroom/themes/img_read.jpg"} 
                alt="banner"
                className="card-img-top card-banner"
              />
              <div className="ms-3 banner-text card-banner d-flex flex-column justify-content-evenly">
                <p className='m-0 fs-4 text-light'>{name}</p>
                <p className='m-0 fs-6 text-light'>{degrees[0].name}</p>
                <p className='m-0 fs-6 text-light'>
                  {`${teachers[0].user.profile.first_name} ${teachers[0].user.profile.last_name}`}
                </p>
              </div>
            </div>
            <Avatar className="card-avatar rounded-circle" src={teachers[0].user.profile.avatar}/>
          </div>
          <div className="card-body">
            <p>{`${lessons_schedule[0].day}: ${lessons_schedule[0].start_hour} - ${lessons_schedule[0].end_hour}`}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {findSubject})(Subject)