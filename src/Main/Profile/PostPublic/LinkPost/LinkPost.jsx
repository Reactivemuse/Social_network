import s from "./LinkPost.module.css"
import React from "react";
import { addPostActionCreator, changeOnTitleActionCreator, changeOnTextActionCreator } from "../../../../redux/profile-reducer";
 
const LinkPost = (props) =>{
  let newElementpostTitle = React.createRef();
  let newElementpostText = React.createRef();

  let addpost = () => {
    props.dispatch(addPostActionCreator())
  }

  let changeOnTitle = () => {
    let newTitle = newElementpostTitle.current.value;
    props.dispatch(changeOnTitleActionCreator(newTitle))

  }
  let changeOnText = () => {
    let newText = newElementpostText.current.value;
    props.dispatch(changeOnTextActionCreator(newText))
  }
  
  return (
    <div className={s.links}>
      <textarea placeholder="Введите название" className={s.links_title} ref={newElementpostTitle} onChange={changeOnTitle} value={props.postTitle}/>
      <textarea placeholder="Введите содержимое" className={s.links_text} ref={newElementpostText} onChange={changeOnText}  value={props.postText} />
      <a href="" className={s.postphoto}>Post a photo</a>
      <button onClick = { addpost } className={s.postjob}>Post a Job</button>
    </div>
  )
}

export default LinkPost