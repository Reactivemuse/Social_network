
const ADD_MESSAGE = "ADD-MESSAGE"
const CREATE_MESSAGE_TEXT = "CREATE-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {

  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        text: state.postMessage
      }
      state.messagesData.push(newMessage);
      state.postMessage = ''
      return state

    case CREATE_MESSAGE_TEXT:
      state.postMessage = action.text;
      return state

    default:
      return state
  }

}

export default dialogsReducer

export const changeOnMessageActionCreator = (text) => ({ type: CREATE_MESSAGE_TEXT, text: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })