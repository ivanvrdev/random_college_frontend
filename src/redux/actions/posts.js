import axios from "axios"

export const getSubjectPosts = (subjectId) => async dispatch => {
  try {
    const response = await axios.get(`/backend/post/list?classroom=${subjectId}`)

    dispatch({type: 'LOAD_SELECTED_SUBJECT_POSTS', payload: [...response.data.posts]})
  } catch(error) {
    console.log(error)
  }
}

export const getGeneralPosts = () => async dispatch => {
  try {
    const response = await axios.get(`/backend/post/list?type=público`)

    dispatch({type: 'LOAD_POSTS', payload: [...response.data.posts]})
  } catch(error) {
    console.log(error)
  }
}