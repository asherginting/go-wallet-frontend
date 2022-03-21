const registerState = {
  dataRegist: {},
  results: {},
  message: '',
  isError: false,
  isLoading: false
}

export const registerUser = (state = registerState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      state.isError = false;
      state.message = '';
      state.dataRegist = {}
      state.isLoading = true;
      return { ...state }
    }
    case 'REGISTER_FULFILLED': {
      const {data} = action.payload
      state.isError = false;
      state.isLoading = false;
      state.results = data;
      return { ...state };
    }
    case 'REGISTER_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isError = true;
      state.message = message;
      return { ...state };
    }
    case 'ADD_DATA_REGIST': {
      const { dataRegist } = action.payload;
      state.dataRegist = dataRegist;
    }
    default: {
      return { ...state };
    }
  }
}

const loginState = {
  results: {},
  token: null,
  isLoading: false,
  isError: false,
  errMessage: null,
}

export const login = (state = loginState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      state.isError = false;
      state.token = null;
      state.isLoading = true;
      return { ...state };
    }
    case 'LOGIN_FULFILLED': {
      const { data } = action.payload
      state.token = data.results.token;
      state.isError = false;
      state.isError = false;
      window.localStorage.setItem('token', data.results.token);
      return { ...state };
    }
    case 'LOGIN_REJECTED': {
      const {message} = action.payload.response.data
      state.isLoading = false;
      state.token = null;
      state.errMessage = message;
      state.isError = true;
      return  { ...state };
    }
    case 'USER_PROFILE_PENDING': {
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'USER_PROFILE_FULFILLED': {
      const { data } = action.payload
      state.isError = false;
      state.isLoading = false;
      state.results = data.results;
      return { ...state }
    }
    case 'USER_PROFILE_REJECTED': {
      state.isError = true;
      state.isError = false;
      state.results = {}
      return { ...state };
    }
    case 'LOGOUT': {
      state.results = {};
      state.token = null;
      state.errMessage = null;
      state.isError = false;
      state.isLoading = false;
      window.localStorage.removeItem('token')
      return { ...state };
    }
    default: {
      return  { ...state };
    }
  }
}

const forgotState = {
  message: null,
  isLoading: false,
  isError: false,
  isSuccess: false
}

export const forgotPassword = (state = forgotState, action) => {
  switch (action.type) {
    case 'FORGOT_PASSWORD_PENDING': {
      state.isError = false;
      state.message = null;
      state.isLoading = true;
      state.isSuccess = false;
      return { ...state };
    }
    case 'FORGOT_PASSWORD_FULFILLED': {
      const { data } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.message = data.message;
      return { ...state };
    }
    case 'FORGOT_PASSWORD_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.message = message;
      state.isSuccess = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

const changeState = {
  message: null,
  isLoading: false,
  isError: false,
  isSuccess: false
}

export const changePassword = (state = changeState, action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_PENDING': {
      state.isError = false;
      state.message = null;
      state.isLoading = true;
      state.isSuccess = false;
      return { ...state };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      const { data } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.message = data.message;
      return { ...state };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.message = message;
      state.isSuccess = false;
      state.isError = true;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
