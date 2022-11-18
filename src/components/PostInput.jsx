import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Avatar from "./Avatar"

const createPostSchema = Yup.object().shape({
  header: Yup.string()
  .required('Es requerido')
  .min(5, 'Demasiado corto')
  .max(50, 'Demasiado largo'),
  description: Yup.string()
  .required('Es requerido')
  .min(5, 'Demasiado corto')
  .max(200, 'Demasiado largo')
})

const PostInput = ({sessionAvatar, userId}) => {
  
  const [ showForm, setShowForm ] = useState(false)
  
  const handleSubmit = ({header, description}) => {
    const body = {
      author: userId,
      content: {header, description}
    }

    console.log(body)
  }

  return (
    <div className="my-2">
      <div className="card shadow-sm">
      {
          showForm ?
          <Formik
            initialValues={{
              header: "",
              description: ""
            }}
            validationSchema={createPostSchema}
            onSubmit={handleSubmit}
          >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
              return (
                <div className='card-body'>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label htmlFor="header" className="form-label">Título</label>
                      <input 
                        type="text" 
                        name="header" 
                        id='header' 
                        className={"form-control " + (errors["header"] ? "is-invalid" : "")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors["header"] && <p className='invalid-feedback'>{errors["header"]}</p>}
                    </div>
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">Contenido</label>
                      <textarea 
                        name="description" 
                        id='description' 
                        cols="30" 
                        rows="4" 
                        className={'form-control ' + (errors["description"] ? "is-invalid" : "")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors["description"] && <p className='invalid-feedback'>{errors["description"]}</p>}
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type='button' className='btn btn-secondary' onClick={()=>setShowForm(false)}>
                        Cancelar
                      </button>
                      <button 
                        type="submit" 
                        className='btn btn-outline-primary'
                        disabled={!(Object.keys(errors).length === 0 && Object.keys(touched).length === 2)}
                      >
                        Publicar
                      </button>
                    </div>
                  </form>
                </div>
              )}
            }  
          </Formik> :
          <div className="card-body d-flex" style={{cursor: "pointer"}} onClick={()=>setShowForm(true)}> 
            <Avatar 
              style={{height: 40, width: 40}}
              src={sessionAvatar}
            />
            <div className="d-flex align-items-center">
              <p className="mb-0 ms-3 text-secondary fs-6">
                Anuncia algo a la clase
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  sessionAvatar: state.session.user.profile.avatar,
  userId: state.session.user._id
})

export default connect(mapStateToProps)(PostInput)