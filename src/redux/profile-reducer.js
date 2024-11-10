const ADD_POST = "ADD-POST"
const CREATE_TITLE = "CREATE-TITLE"
const CREATE_TEXT = "CREATE-TEXT"

const profileReducer = (state, action) => {

  switch (action.type){
    case ADD_POST:
      let newElement = {
        title: state.postTitle,
        text: state.postText,
        likes: 0
      }
      state.postData.push(newElement);
      state.postTitle = ''
      state.postText = ''
      return state

    case CREATE_TITLE:
      state.postTitle = action.title;
      return state

    case CREATE_TEXT:
      state.postText = action.text;
      return state
    default:
      return state

  }
  
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeOnTitleActionCreator = (title) => ({ type: CREATE_TITLE, title: title })
export const changeOnTextActionCreator = (text) => ({ type: CREATE_TEXT, text: text })