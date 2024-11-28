import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7f2efdc0-fd2c-4e71-aa63-a78d164bc576"
  }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => {
    return responce.data;
  }) 
}

export const AuthMe = () => {
  return instance.get(`auth/me`).then(responce => {
    return responce.data;
  })
} 

export const UnfollowUser = (id) => {
  return instance.delete(`follow/${id}`).then(responce => {
    return responce.data;
  })
}

export const followUser = (id) => {
  return instance.post(`follow/${id}`).then(responce => {
    return responce.data;
  })
}

export const getProfile = (userId) => {
  return instance.get("profile/" + userId).then(responce => {
    return responce.data;
  })
}