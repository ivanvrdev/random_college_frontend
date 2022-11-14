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