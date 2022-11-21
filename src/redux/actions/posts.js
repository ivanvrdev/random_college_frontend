import axios from "axios"

export const getSubjectPosts = (subjectId) => async dispatch => {
  try {
    const response = await axios.get(`/backend/post/list?classroom=${subjectId}`)

    dispatch({type: 'LOAD_SELECTED_SUBJECT_POSTS', payload: [...response.data.posts.reverse()]})
  } catch(error) {
    console.log(error)
  }
}

export const getGeneralPosts = () => async dispatch => {
  try {
    const response = await axios.get(`/backend/public/post`)

    dispatch({type: 'LOAD_POSTS', payload: [...response.data.posts.reverse()]})
  } catch(error) {
    console.log(error)
  }
}

export const createPost = (postBody) => async dispatch => {
  const body = JSON.stringify(postBody)

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  try {
    const response = await axios.post('/backend/post/create', body, config)

    dispatch({type: 'CREATE_POST_RESPONSE', payload: response.data})
  } catch(error) {
    console.log(error)
  }
}

export const createComment = (postId, comments, userId, description) => async dispatch => {
  
  const body = JSON.stringify({
    comments: [
      ...comments,
      {author: userId, description}
    ]})

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await axios.put(`/backend/post/update/${postId}`, body, config)

    dispatch({type: 'CREATE_COMMENT_RESPONSE', payload: response.data})
  } catch (error) {
    console.log(error)
  }
} 

export const clearResponse = () => dispatch => {
  dispatch({type: 'CLEAR_POST_RESPONSE'})
  dispatch({type: 'CLEAR_COMMENT_RESPONSE'})
}