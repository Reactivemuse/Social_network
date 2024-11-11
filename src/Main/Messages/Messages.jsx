import s from "./Messages.module.css"
import People from "./People/People"
import TextMessages from "./TextMessages/TextMessages"
import React from "react"

const Messages = (props) => {
  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.addMessage()
  }

  let changeMessage = () => {
    let newMessage = newMessageElement.current.value;
    props.changeMessage(newMessage)
  }

  return (
    <div className={s.message_container}>
      <div className={s.items}>
        <People dialogsData = {props.dialogsData}/>
        <TextMessages messagesData = {props.messagesData}/>
      </div>
      <textarea onChange={changeMessage} ref={newMessageElement} value={props.messageText} />
      <button onClick={addMessage}>Добавить</button>
    </div>
  )
}

export default Messages