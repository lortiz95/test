const initialState = {
  isConnected: false,
};

const network = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CONNECTION_STATUS':
      return Object.assign({}, state, {
        isConnected: action.payload,
      });
    default:
      return state
  }
}

export default network;