const historiesState = {
  results: [],
  isLoading: false,
  isError: false
}

const histories = (state = historiesState, action) => {
  switch (action.type) {
    case 'GET_HISTORIES_PENDING': {
      state.results = [];
      state.isLoading = true;
      state.isError = false;
      return { ...state }
    }
    case 'GET_HISTORIES_FULFILLED': {
      const {data} = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.results = data.results;
      return { ...state }
    }
    case 'GET_HISTORIES_REJECTED': {
      state.isLoading = false;
      state.isError = true;
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default histories;
