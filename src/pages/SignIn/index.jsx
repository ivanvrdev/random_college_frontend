import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import FloatingLabelInput from '../../components/FloatingLabelInput'
import Alert from '../../components/Alert'
import Loader from '../../components/Loader'

const signInSchema = Yup.object().shape({
username: Yup.string()
  .required('Debe ingresar un nombre de usuario'),
  password: Yup.string()
  .required('Debe ingresar una contraseña')
})

const SignIn = ({dispatch}) => {
  const navigate = useNavigate()
  
  const [serverResponse, setServerResponse] = useState(null)

  const handleFeedback = (errors, touched, name) => {
    if(!touched[name]) return null
    if(!errors[name]) return null
    return {valid: false, message: errors[name]}
  }
  
  const handleSubmit = async (values) => {
    try{
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(values)
      })
      
      const data = await response.json()
      
      if(response.ok){
  
        const { user, token } = data
        dispatch({type: 'SIGN_IN', payload: {token, data: user}})
        localStorage.setItem('token', token)

        navigate('/')
      }
  
      setServerResponse(data)
    } catch(error) {
      setServerResponse({message: '¡Ups! Ha ocurrido un error...', type: 'danger'})
    }
  }

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-9 col-sm-12 ">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className='card-title text-center mb-3'>Iniciar sesión</h2>
              <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={signInSchema}
                onSubmit={handleSubmit}
              >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                  <form onSubmit={handleSubmit}>
                    <FloatingLabelInput
                      type='text'
                      name='username'
                      placeholder='johndoe'
                      labelText='nombre de usuario'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      feedback={handleFeedback(errors, touched, 'username')}
                    />
                    <FloatingLabelInput 
                      type='password'
                      name='password'
                      placeholder='1234'
                      labelText='contraseña'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      feedback={handleFeedback(errors, touched, 'password')}
                    />
                    {
                      !isSubmitting ? 
                      <div className='d-grid'>
                        <button 
                          type='submit' 
                          className='btn btn-primary' 
                          disabled={
                            !values.username || !values.password
                          }
                        >
                          Enviar
                        </button>
                      </div> :
                      <div className="row justify-content-center">
                        <Loader />
                      </div>
                    }
                    {serverResponse && !isSubmitting && <Alert message={serverResponse.message} type={serverResponse.type}/>}
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(SignIn)