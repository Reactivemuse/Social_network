import React from "react";
import LinkPost from "./LinkPost";
import { addPostActionCreator, changeOnTitleActionCreator, changeOnTextActionCreator } from "../../../../redux/profile-reducer";

const LinkPostContainer = (props) => {
  let state = props.store.getState()

  let addpost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let changeOnTitle = (newTitle) => {
    props.store.dispatch(changeOnTitleActionCreator(newTitle))

  }
  let changeOnText = (newText) => {
    props.store.dispatch(changeOnTextActionCreator(newText))
  }

  return (
    <LinkPost addpost = {addpost} changeOnTitle = {changeOnTitle} changeOnText = {changeOnText}
      postTitle={state.profilePage.postTitle} postText={state.profilePage.postText}/>
  )
}

export default LinkPostContainer