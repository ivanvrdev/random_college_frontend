import axios from 'axios'

export const login = ({username, password}) => async dispatch => {
  
  const body = JSON.stringify({username, password})

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  try {
    const response = await axios.post('/backend/auth/login', body, config)
    
    const { token, user } = response.data
    
    dispatch({type: 'LOG_IN', payload: {token, user}})
    localStorage.setItem('random_college', token)
    axios.defaults.headers.common['token'] = token
  } catch(error) {
    const { type, message } = error.response.data
    dispatch({type: 'LOG_IN_ERROR', payload: {type, message}})
  }
}

export const authSession = () => async dispatch => {
  const token = localStorage.getItem('random_college')

  if(!token) return

  const body = JSON.stringify({token})

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await axios.post('/backend/auth/token', body, config)

    if(response.status !== 200) return

    const { user } = response.data

    dispatch({type: 'LOG_IN', payload: {token, user}})
    axios.defaults.headers.common['token'] = token
  } catch (error) {
    console.log(error)
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('random_college')
  dispatch({type: 'LOG_OUT'})
  delete axios.defaults.headers.common['token']
}

export const setPreviusLocation = (location) => dispatch => {
  dispatch({type: 'SET_PREVIUS_LOCATION', payload: location})
}