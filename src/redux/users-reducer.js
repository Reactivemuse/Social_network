
const ADD_POST = "ADD-POST"
const CREATE_TITLE = "CREATE-TITLE"
const CREATE_TEXT = "CREATE-TEXT"

let initial = {
  usersData: [
    { id: 1, followed: true, name: 'Dmitrye K', description: 'I am looking job right now', place: {country: 'Belarus', city: 'Minsk'}},
    { id: 2, followed: false, name: 'Dmitrye P', description: 'I am looking job right now', place: { country: 'Belarus', city: 'Minsk' } },
    { id: 3, followed: true, name: 'Sasha', description: 'I am looking job right now', place: { country: 'Belarus', city: 'Minsk' } }
  ]
};

const usersReducer = (state = initial, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newElement = {
        title: state.postTitle,
        text: state.postText,
        likes: 0
      }
      return {
        ...state,
        postData: [...state.postData, newElement], // замена push
        postTitle: '',
        postText: ''
      }

    }
    case CREATE_TITLE: {
      return {
        ...state,
        postTitle: action.title
      }
    }
    case CREATE_TEXT: {
      return {
        ...state,
        postText: action.text
      }
    }
    default:
      return state
  }

}

export default usersReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeOnTitleActionCreator = (title) => ({ type: CREATE_TITLE, title: title })
export const changeOnTextActionCreator = (text) => ({ type: CREATE_TEXT, text: text })