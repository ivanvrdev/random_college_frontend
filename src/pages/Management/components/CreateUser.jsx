import React from 'react'
import FloatingLabelInput from '../../../components/FloatingLabelInput'

const Input = ({name, placeholder, type, restOfProps}) => {
  return(
    <div className="row mb-2">
      <div className="col-auto">
        <label htmlFor={name} className="form-label">{placeholder}</label>
      </div>
      <div className="col-auto">
        <input 
          type={type}
          name={name}
          id={name} 
          className="form-control" 
          placeholder={placeholder} 
          {...restOfProps}
        />
      </div>
    </div>
  )
}

const CreateUser = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="card">
          <div className="card-body">
            <p className='fs-3'>Crear usuario</p>
            <form action="#">
              <Input name="username" placeholder="Nombre de usuario" type="text"/>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser