
let store = {
  _renderElement() {
    console.log("GOOD")
  },
  _state: {
    messagesPage: {
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
      ]
    },

    profilePage: {
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
    }
  },
  getState(){
    return this._state
  },
  addpost(){
    let newElement = {
      title: this._state.profilePage.postTitle,
      text: this._state.profilePage.postText,
      likes: 0
    }
    this._state.profilePage.postData.push(newElement);
    this._state.profilePage.postTitle = ''
    this._state.profilePage.postText = ''
    this._renderElement(this._state)
  },
  createtitle(text){
    this._state.profilePage.postTitle = text;
    this._renderElement(this._state)
  },

  createtext(text){
    this._state.profilePage.postText = text;
    this._renderElement(this._state)
  },

  subscribe(observer){
    this._renderElement = observer
  }

}

export default store