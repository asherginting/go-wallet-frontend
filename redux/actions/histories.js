import http from "../../helpers/http"
export const getHistory = () => {
  return {
    type: 'GET_HISTORIES',
    payload: http().get('/api/character')
  }  
}
