import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PostInput from '../../components/PostInput'
import Post from '../../components/Post'

import { getGeneralPosts, clearResponse } from '../../redux/actions/posts'

const Home = ({auth, posts, getGeneralPosts, postResponse, commentResponse, clearResponse}) => {
  
  useEffect(()=>{
    getGeneralPosts()
  }, [])
  
  useEffect(()=>{
    if(!postResponse) return

    if(postResponse.type !== 'success') return

    getGeneralPosts()
    clearResponse()
  }, [postResponse])

  useEffect(()=>{
    if(!commentResponse) return

    if(commentResponse.type !== 'success') return

    getGeneralPosts()
    clearResponse()
  }, [commentResponse])

  return (
    <div>
      {auth && <PostInput />}
      {
        posts &&
        posts.map((post, index) => <Post key={index} {...post} />)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.session.auth,
  posts: state.posts.list,
  postResponse: state.posts.postResponse,
  commentResponse: state.posts.commentResponse,
})

export default connect(mapStateToProps, {getGeneralPosts, clearResponse})(Home)