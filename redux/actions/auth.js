import http from "../../helpers/http";
const callbackUrl = process.env.CALLBACK_URL

export const signup = (fullName, email, password, pin) => {
  const param = new URLSearchParams();
  param.append('fullName', fullName);
  param.append('email', email);
  param.append('password', password);
  param.append('pin', pin);

  return {
    type: 'REGISTER',
    payload: http().post('/auth/register', param)
  }
}

export const addDataRegist = (fullName, email, password) => {
  const dataRegist = {fullName, email, password}
  return {
    type: 'ADD_DATA_REGIST',
    payload: {
      dataRegist
    }
  }
}

export const login = (email, password) => {
  const param = new URLSearchParams();
  param.append('email', email);
  param.append('password', password);

  return {
    type: 'LOGIN',
    payload: http().post('/auth/login', param)
  }
}

export const getProfile = (token) => {
  return {
    type: 'USER_PROFILE',
    payload: http(token).get('/profile')
  }
}

export const forgotPassword = (email) => {
  const param = new URLSearchParams();
  param.append('email', email);
  return {
    type: 'FORGOT_PASSWORD',
    payload: http().post(`/auth/forgot-password?callback_url=${callbackUrl}`, param)
  }
}

export const changePassword = (otp, newPwd, confirmPwd) => {
  const param = new URLSearchParams();
  param.append('otp', Number(otp));
  param.append('newPassword', newPwd);
  param.append('confirmPassword', confirmPwd)
  return {
    type: 'CHANGE_PASSWORD',
    payload: http().post('/auth/forgot-password', param)
  }
}
