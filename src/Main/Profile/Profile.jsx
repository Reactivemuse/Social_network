import React from "react";
import s from "./Profile.module.css"
import PostPublic from "./PostPublic/PostPublic"
import Post from "./Post/Post"

const Profile = () =>{
  let postData = [
    {
      title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
    },
    {
      title: "Задание", text: "Таким образом, ты сможешь развить свою письменную речь и станешь более уверенным в своих способностях.", likes: "5"
    },
    {
      title: "Удачи!", text: "Главное - просто писать и выражать свои мысли.", likes: "9"
    },
    {
      title: "Cтараемся!", text: "Пожалуйста, уделите немного времени, чтобы оценить результат.", likes: "100"
    },
    {
      title: "Defense", text: "It seems like you may have intended to write 'defense' or 'defeats,' but since the topic is ambiguous, I'll provide a brief overview of both concepts for a better understanding.", likes: "1000"
    },
    {
      title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
    }
  ]
  
  let postItem = postData
    .map(post => <Post title={post.title} likes={post.likes} text={post.text} />)
  return (
    <div className={s.profile}>
      <PostPublic/>
      {postItem}
    </div>
  )
}

export default Profile