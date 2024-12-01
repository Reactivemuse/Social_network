import { getProfile } from "../API/api"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initial = {
  profile: null
}

const sidebarReducer = (state = initial, action) => {

  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }

}

export default sidebarReducer

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 31897
    }
    getProfile(userId).then(
      responce => {
        dispatch(setUserProfile(responce))
      }
    )
  }
} 



