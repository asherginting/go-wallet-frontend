const intialState = {
  results: {},

}

const inputTransfer = (state = intialState, action) => {
  switch (action.type) {
    case 'INPUT_TRANSFER': {
      const { payload } = action
      state.results = payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

export default inputTransfer;
