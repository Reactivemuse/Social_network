import { AuthMe } from "../API/api";
const SET_USER_DATA = "SET_USER_DATA"

let initial = {
  userId: null,
  email: null,
  login: null,
  isauthorised: false
};

const authReducer = (state = initial, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      
      return {
        ...state,
        userId: action.id,
        email: action.email,
        login: action.login,
        isauthorised: true
      }

    }
    
    default:
      return state
  }

}

export default authReducer


export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, id: id, email: email, login: login })

export const AuthMeThunk = () => {
  return (dispatch) => {
    AuthMe().then(
      responce => {
        if (responce.resultCode === 0) {
          dispatch(setUserData(responce.data.id, responce.data.email, responce.data.login))
        }
      }
    )
  }
}


