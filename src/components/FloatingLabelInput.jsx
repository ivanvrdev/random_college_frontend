import React, {useState, useEffect} from 'react'


const defaultClassname = 'form-control'

const FloatingLabelInput = ({labelText, feedback, ...restOfProps}) => {

  const [inputClassname, setInputClassname] = useState(defaultClassname)

  useEffect(()=>{
    if(!feedback){
      setInputClassname(defaultClassname)
      return
    }

    if(!feedback.valid){
      setInputClassname(defaultClassname + ' is-invalid')
      return
    }

    setInputClassname(defaultClassname + ' is-valid')

  }, [feedback])

  return (
    <div className="mb-3">
        <div className="form-floating">
          <input 
            className={inputClassname} 
            {...restOfProps}
          />
          <label htmlFor="floatingInput">{labelText}</label>
          {
            feedback &&
            <div className={feedback.valid ? "valid-feedback" : "invalid-feedback"}>
              {feedback.message}
            </div>
          }
        </div>
    </div>
  )
}

export default FloatingLabelInput