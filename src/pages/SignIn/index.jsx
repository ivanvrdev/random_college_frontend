import React, {useState} from 'react'
import FloatingLabelInput from '../../components/FloatingLabelInput'

const SignIn = () => {

  const [errors, setErrors] = useState(true)

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-9 col-sm-12 ">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className='card-title text-center mb-3'>Iniciar sesión</h2>
              <form>
                <FloatingLabelInput 
                  type='text'
                  name='username'
                  placeholder='johndoe'
                  labelText='nombre de usuario'
                />
                <FloatingLabelInput 
                  type='password'
                  name='password'
                  placeholder='1234'
                  labelText='contraseña'
                />
                <div className='d-grid'>
                  <button type='button' className='btn btn-primary'>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn