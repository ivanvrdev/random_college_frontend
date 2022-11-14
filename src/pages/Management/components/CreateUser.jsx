import React from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

import Alert from '../../../components/Alert'

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

const CreateUser = () => {

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12">
        <div className="card mb-3">
          <div className="card-body">
            <p className='fs-3'>Crear usuario</p>
            <Formik
              initialValues={{
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                phone: "",
                isAdmin: false
              }}
              // onSubmit={handleSubmit}
            >
              {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form action="#" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <Input name="username" labelText="Nombre de usuario" type="text" value={values.username} onChange={handleChange}/>
                      <Input name="email" labelText="Correo electrónico" type="email" value={values.email} onChange={handleChange}/>
                      <Input name="phone" labelText="Número de teléfono" type="number" value={values.phone} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Input name="password" labelText="Contraseña" type="password" value={values.password} onChange={handleChange}/>
                      <Input name="confirmPassword" labelText="Confirmar contraseña" type="password" value={values.confirmPassword} onChange={handleChange}/>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" name='isAdmin' value={values.isAdmin} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Es administrador</label>
                      </div>
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

export default CreateUser