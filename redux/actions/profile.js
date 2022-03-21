import http from '../../helpers/http';

export const getProfile = (token) => {
  return {
    type: 'USER_PROFILE',
    payload: http(token).get('/profile')
  }
}

export const getBalance = (token) => {
  return { 
    type: 'GET_BALANCE',
    payload: http(token).get('/profile/balance')
  }
}

export const getPhoneList = (token) => {
  return {
    type: 'GET_PHONELIST',
    payload: http(token).get('/profile/phones')
  }
}
