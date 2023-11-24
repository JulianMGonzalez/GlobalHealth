import axios from "axios";
import { API_GLOBALHEALTH } from "./settings";

const userAxios = axios.create({
  baseURL: `${API_GLOBALHEALTH}/api/usuario`,
  
})
userAxios.interceptors.request.use(function (config) {
  config.headers.token = `${localStorage.getItem('token')}`
  return config;
}, function (error) {
  return Promise.reject(error)
})

const fromApiResponseToUsers = (apiResponse, history) => {
  const data = apiResponse.data
  if (history) {
    const {name, email, phone, createdAt, birth, gender, avatar, historyClinical, state} = data
    const dateFormat = new Date(createdAt).toLocaleDateString()
    const birthFormat = new Date(birth).toLocaleDateString()
    return { name, email, phone, dateFormat, gender, avatar, birthFormat, historyClinical, state}
  }
  if (Array.isArray(data)) {
    const users = data.map(userItem => {
      const { _id, name, email, phone, createdAt, gender, rol } = userItem
      const dateFormat = new Date(createdAt).toLocaleString()
      return { _id, name, email, phone, dateFormat, gender, rol }
    })
    return users
  }
  return []
}


export const getUsers = async (rol) => await userAxios.post(`/list/`, { rol }).then(res => fromApiResponseToUsers(res))

export const getUserDetail = async (id) => await userAxios.get(`/list/${id}`,).then(res => fromApiResponseToUsers(res, true))

export const register = async (user) => await userAxios.post(`/register`, user)

export const login = async (user) => await userAxios.post(`/login`, user)

export const profile = async () => await userAxios.get(`/profile`)

export const updateProfile = async (user, id) => await userAxios.put(`/update/${id}`, user)

