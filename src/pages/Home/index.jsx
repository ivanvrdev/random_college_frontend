import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PostInput from '../../components/PostInput'
import Post from '../../components/Post'

import { getGeneralPosts } from '../../redux/actions/posts'

const Home = ({auth, posts, getGeneralPosts}) => {
  
  useEffect(()=>{
    getGeneralPosts()
  }, [])
  
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
  posts: state.posts.list
})

export default connect(mapStateToProps, {getGeneralPosts})(Home)