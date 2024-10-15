import React from "react";
import s from "./Profile.module.css"
import LinkPost from "./PostPublic/LinkPost/LinkPost"
import PostPublic from "./PostPublic/PostPublic"
import Post from "./Post/Post"

const Profile = () =>{

  return (
    <div className={s.profile}>
      <PostPublic/>
      <Post/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Profile