import React from "react";
import s from "./Profile.module.css"
import PostPublic from "./PostPublic/PostPublic"
import Post from "./Post/Post"

const Profile = (props) =>{
  
  let postItem = props.postData.postData
    .map(post => <Post title={post.title} likes={post.likes} text={post.text} />)
  return (
    <div className={s.profile}>
      <PostPublic addpost={props.addpost} createtext={props.createtext} postText = {props.postData.postText}/>
      {postItem}
    </div>
  )
}

export default Profile