
import React from "react"
import { addMessageActionCreator, changeOnMessageActionCreator } from "../../redux/dialogs-reducer"
import Messages from "./Messages"

const MessagesContainer = (props) => {

  let state = props.store.getState()
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  let changeMessage = (newMessage) => {
    props.store.dispatch(changeOnMessageActionCreator(newMessage))
  }
  return (
    <Messages addMessage={addMessage} changeMessage={changeMessage} 
    messageText={state.messagesPage.postMessage} 
    dialogsData={state.messagesPage.dialogsData} 
    messagesData={state.messagesPage.messagesData}/>
  )
}

export default MessagesContainer