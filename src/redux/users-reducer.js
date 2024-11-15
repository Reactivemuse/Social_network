
const USER_FOLLOW = "USER-FOLLOW"
const USER_UNFOLLOW = "USER-UNFOLLOW"
const SET_USERS = "SET-USERS"

let initial = {
  usersData: [ ]
};

const usersReducer = (state = initial, action) => {

  switch (action.type) {
    case USER_FOLLOW: {
      
      return {
        ...state,
        usersData: state.usersData.map( data => {
          if (data.id === action.id){
            return {...data, followed: true}
          }
          return data;
        })
      }

    }
    case USER_UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(data => {
          if (data.id === action.id) {
            return { ...data, followed: false }
          }
          return data;
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        usersData: [...state.usersData, ...action.users]
      }
    }
    
    default:
      return state
  }

}

export default usersReducer

export const followActionCreator = (id) => ({ type: USER_FOLLOW, id: id})
export const unFollowActionCreator = (id) => ({ type: USER_UNFOLLOW, id: id })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })