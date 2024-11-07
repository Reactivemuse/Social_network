import s from "./LinkPost.module.css"
import React from "react";

const LinkPost = (props) =>{
  let newElementpost = React.createRef();

  let addpost = () => {
    props.addpost()
  }

  let changeOn = () => {
    let newText = newElementpost.current.value;
    props.createtext(newText);

  }
  return (
    <div className={s.links}>
      <textarea ref={newElementpost} onChange={changeOn} value = {props.postText}/>
      <a href="" className={s.postphoto}>Post a photo</a>
      <button onClick = { addpost } className={s.postjob}>Post a Job</button>
    </div>
  )
}

export default LinkPost