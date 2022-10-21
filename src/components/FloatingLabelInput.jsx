import React from 'react'

const FloatingLabelInput = ({labelText, ...restOfProps}) => {
  return (
    <div className="mb-3">
        <div class="form-floating">
            <input class="form-control is-valid" {...restOfProps}/>
            <label for="floatingInput">{labelText}</label>
        </div>
        <div className="valid-feedback">
            hola
        </div>
    </div>
  )
}

export default FloatingLabelInput