import axios from "axios"

export const getSubjects = (userId, userType = 'student') => async dispatch => { 
  try{
    const response = await axios.get(`/backend/subject/list?${userType}=${userId}`)

    dispatch({type: 'LOAD_SUBJECTS', payload: [...response.data.subjects]})
  } catch (error) {
    console.log(error)
  }
}

export const findSubject = (subjectId) => dispatch => {
  dispatch({type: 'LOAD_SUBJECTS', payload: subjectId})
}