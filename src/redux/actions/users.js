import axios from "axios"

export const getUsers = () => async dispatch => {
  try{
    const response = await axios.get('/backend/user/list')

    const { users } = response.data

    dispatch({type: 'LOAD_USERS', payload: [...users]})
  }catch(error){
    console.log(error)
  }
}

export const getUserByUsername = (username) => async dispatch => {
  try{
    const response = await axios.get(`/backend/user/list?username=${username}`)

    const { users } = response.data

    dispatch({type: 'SELECT_USER', payload: users[0] })
  }catch(error){
    console.log(error)
  }
}

export const findUser = (username) => dispatch => {
  dispatch({type: 'FIND_USER', payload: username})
}

export const createUser = (values) => async dispatch => {
  // try {

  //   const {username, email, phone, password, confirmPassword, isAdmin} = values

  //   const types = ['estudiante']

  //   if(isAdmin) types.splice(0, 1, 'administrador')

  //   const body = JSON.stringify({username, email, phone, password, confirmPassword, types})

  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   const response = await axios.post('/backend/user/create', body, config)

  // } catch (error) {
  //   console.log(error)
  // }
}

export const updateUserProfile = (values, userId) => async dispatch =>{
  try {
    const body = JSON.stringify({profile: values})

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.put(`/backend/user/update/${userId}`, body, config)

    dispatch({type: 'UPDATE_MY_USER', payload: response.data})

  } catch (error) {
    console.log(error)
  }
}

export const clearUpdatedMessage = () => dispatch => {
  dispatch({type: 'CLEAR_UPDATED_MESSAGE'})
}