import { getUsers, UnfollowUser } from "../API/api"
const USER_FOLLOW = "USER-FOLLOW"
const USER_UNFOLLOW = "USER-UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
let initial = {
  usersData: [ ],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
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
        usersData: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, 
        currentPage: action.page
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount
      }
    }
    
    default:
      return state
  }

}

export default usersReducer

export const addFollow = (id) => ({ type: USER_FOLLOW, id: id})
export const addUnfollow = (id) => ({ type: USER_UNFOLLOW, id: id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCounts = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })


export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    getUsers(currentPage, pageSize).then(
      responce => {
        dispatch(setUsers(responce.items))
        dispatch(setTotalUsersCounts(responce.totalCount))
      }
    )
  }
}

export const UnfollowUserThunk = (id) => {
  return (dispatch) => {
    UnfollowUser(id).then(
      responce => {
        if (responce.resultCode == 0) {
          dispatch(addUnfollow(id))
        }
      }
    )
  }
}
