import s from "./Messages.module.css"
import People from "./People/People"
import TextMessages from "./TextMessages/TextMessages"
import React from "react"
const Messages = (props) => {
  let message_item = React.createRef()

  let message_function = () => {
    let text = message_item.current.value
    alert(text)
  }
  return (
    <div className={s.message_container}>
      <div className={s.items}>
        <People dialogsData = {props.dialogsData}/>
        <TextMessages messagesData = {props.messagesData}/>
      </div>
      <textarea ref = {message_item}/>
      <button onClick={ message_function}>Добавить</button>
    </div>
  )
}

export default Messages