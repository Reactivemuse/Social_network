
import React from "react"
import { addMessageActionCreator, changeOnMessageActionCreator } from "../../redux/dialogs-reducer"
import Messages from "./Messages"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    messageText: state.messagesPage.postMessage,
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
    isAuth: state.auth.isauthorised
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessage: (newMessage) => {
      dispatch(changeOnMessageActionCreator(newMessage))
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer