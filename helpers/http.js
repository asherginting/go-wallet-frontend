import axios from 'axios'
const BACKEND_URL = process.env.API_URL

const http = (token) => {
  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return axios.create({
    baseURL: BACKEND_URL,
    headers
  })
}

export default http
