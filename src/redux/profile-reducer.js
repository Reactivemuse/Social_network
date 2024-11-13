const ADD_POST = "ADD-POST"
const CREATE_TITLE = "CREATE-TITLE"
const CREATE_TEXT = "CREATE-TEXT"

let initial = {
  postData: [
    {
      title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
    },
    {
      title: "Задание", text: "Таким образом, ты сможешь развить свою письменную речь и станешь более уверенным в своих способностях.", likes: "5"
    },
    {
      title: "Удачи!", text: "Главное - просто писать и выражать свои мысли.", likes: "9"
    },
    {
      title: "Cтараемся!", text: "Пожалуйста, уделите немного времени, чтобы оценить результат.", likes: "100"
    },
    {
      title: "Defense", text: "It seems like you may have intended to write 'defense' or 'defeats,' but since the topic is ambiguous, I'll provide a brief overview of both concepts for a better understanding.", likes: "1000"
    },
    {
      title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
    }
  ],
  postTitle: "",
  postText: ""
};

const profileReducer = (state = initial, action) => {

  switch (action.type){
    case ADD_POST: {
      let newElement = {
        title: state.postTitle,
        text: state.postText,
        likes: 0
      }
      let stateCopy = {...state}
      stateCopy.postData = [...state.postData]
      stateCopy.postData.push(newElement);
      stateCopy.postTitle = ''
      stateCopy.postText = ''
      return stateCopy
    }
    case CREATE_TITLE: {
      let stateCopy = { ...state }
      stateCopy.postTitle = action.title;
      return stateCopy
    }
    case CREATE_TEXT: {
      let stateCopy = { ...state }
      stateCopy.postText = action.text;
      return stateCopy
    }
    default:
      return state

  }
  
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeOnTitleActionCreator = (title) => ({ type: CREATE_TITLE, title: title })
export const changeOnTextActionCreator = (text) => ({ type: CREATE_TEXT, text: text })