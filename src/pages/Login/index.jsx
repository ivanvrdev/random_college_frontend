import {useEffect} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import FloatingLabelInput from '../../components/FloatingLabelInput'
import Alert from '../../components/Alert'
import Loader from '../../components/Loader'

import { login } from '../../redux/actions/session'

const signInSchema = Yup.object().shape({
username: Yup.string()
  .required('Debe ingresar un nombre de usuario'),
  password: Yup.string()
  .required('Debe ingresar una contraseña')
})

const Login = ({previusLocation, auth, authError, login}) => {
  const navigate = useNavigate()

  const handleFeedback = (errors, touched, name) => {
    if(!touched[name]) return null
    if(!errors[name]) return null
    return {valid: false, message: errors[name]}
  }

  useEffect(()=>{
    if(!auth) return
    navigate(previusLocation)
  }, [auth])

  return (
    <div style={{height: '70vh'}}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-9 col-sm-12 ">
          <div className="card">
            <div className="card-body">
              <h2 className='card-title text-center mb-3'>Iniciar sesión</h2>
              <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={signInSchema}
                onSubmit={login}
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
                    {authError && !isSubmitting && <Alert message={authError.message} type={authError.type}/>}
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

const mapStateToProps = state => state.session

export default connect(mapStateToProps, {login})(Login)