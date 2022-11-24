import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Alert from '../../../components/Alert'
import Avatar from '../../../components/Avatar'

import { updateUserProfile, clearUpdatedMessage } from '../../../redux/actions/users'

const Input = ({name, labelText, type, ...restOfProps}) => {
  return(
    <div className="mb-2">
      <label htmlFor={name} className="form-label">{labelText}</label>
      <input 
        type={type}
        name={name}
        id={name} 
        className="form-control" 
        {...restOfProps}
      />
    </div>
  )
}

const PersonalForm = ({userId, profile, updatedMessage, updateUserProfile, clearUpdatedMessage }) => {

  const { avatar, first_name, last_name, cuil, nationallity, born_date, sex } = profile

  const navigate = useNavigate()

  const [preview, setPreview] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  
  const handleChangeFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    
    setSelectedFile(e.target.files[0])
  }

  useEffect(()=>{
    if (!selectedFile) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  
  useEffect(()=>{
    if(!updatedMessage) return

    navigate('/profile/me')

    return () => clearUpdatedMessage()
  }, [updatedMessage])

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12">
        <div className="card mb-3">
          <div className="card-body">
            <p className='fs-3'>Editar información personal</p>
            <Formik
              initialValues={{
                first_name,
                last_name,
                cuil,
                nationallity,
                born_date: born_date.split("T")[0],
                sex
              }}
              onSubmit={(values) => {
                const body = {...profile, ...values}

                if(selectedFile) body.newAvatar = selectedFile

                updateUserProfile(body, userId)
              }}
            >
              {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form action="#" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="d-flex justify-content-center">
                        <Avatar src={preview || avatar} width={100} height={100}/>
                      </div>
                      <Input 
                        name="avatar" 
                        labelText="Foto de perfil" 
                        type="file" 
                        onChange={handleChangeFile}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Input 
                        name="first_name" 
                        labelText="Nombre" 
                        type="text" 
                        value={values.first_name} 
                        onChange={handleChange}
                      />
                      <Input 
                        name="last_name" 
                        labelText="Apellido" 
                        type="text" 
                        value={values.last_name} 
                        onChange={handleChange}
                      />
                      <Input 
                        name="cuil" 
                        labelText="CUIL" 
                        type="number" 
                        value={values.cuil} 
                        onChange={handleChange}
                      />
                      <div className="mb-2">
                        <label htmlFor={"nationallity"} className="form-label">Nacionalidad</label>
                        <select 
                          name={"nationallity"}
                          id={"nationallity"}
                          className="form-select"
                          value={values.nationallity} 
                          onChange={handleChange}
                        >
                          <option value="argentino/a">argentino/a</option>
                          <option value="extrangero/a">extranjero/a</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label htmlFor={"sex"} className="form-label">Sexo</label>
                        <select 
                          name={"sex"}
                          id={"sex"}
                          className="form-select"
                          value={values.sex} 
                          onChange={handleChange}
                        >
                          <option value="femenino">femenino</option>
                          <option value="masculino">masculino</option>
                          <option value="otro">otro</option>
                        </select>
                      </div>
                      <Input
                        name="born_date"
                        labelText="Fecha de nacimiento"
                        type="date"
                        value={values.born_date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Link to="/management" className="btn btn-secondary">
                      Cancelar
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                  {/* <Alert message='hola' type='success' /> */}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { _id, profile } = state.session.user
  const { updatedMessage } = state.session

  return {profile, userId: _id, updatedMessage}
}

export default connect(mapStateToProps, { updateUserProfile, clearUpdatedMessage })(PersonalForm)