
const ADD_MESSAGE = "ADD-MESSAGE"
const CREATE_MESSAGE_TEXT = "CREATE-MESSAGE-TEXT"

let initial = {
  messagesData: [
    { text: "Винни чемпион" },
    { text: "Привет" },
    { text: "Винни чемпион" },
    { text: "Нельзя писать state" },
    { text: "Исправь блок схему" },
  ],
  dialogsData: [
    { id: 1, name: "IGOR" },
    { id: 2, name: "DIMA" },
    { id: 3, name: "ARTEM" },
    { id: 4, name: "KASHIRIN" },
    { id: 5, name: "ANTIPOV" },
  ],

  postMessage: ''
};

const dialogsReducer = (state = initial, action) => {

  switch(action.type){
    case ADD_MESSAGE: {
      let newMessage = {
        text: state.postMessage
      }
      return { 
        ...state,
        messagesData: [...state.messagesData, newMessage], // замена push
        postMessage: ''
      }
    } 
    case CREATE_MESSAGE_TEXT: {
      return { 
        ...state,
        postMessage: action.text
       }
    }
    default:
      return state
  }

}

export default dialogsReducer

export const changeOnMessageActionCreator = (text) => ({ type: CREATE_MESSAGE_TEXT, text: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })