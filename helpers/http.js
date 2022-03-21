import axios from 'axios'
const apiUrl = process.env.API_URL

const http = (token) => {
  const headers = {}
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return axios.create({
    baseURL: apiUrl,
    headers
  })
}

export default http
