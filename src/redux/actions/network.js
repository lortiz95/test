
export const connectionState = (status) => async(dispatch) => {
  dispatch({ type: 'CHANGE_CONNECTION_STATUS', payload: status })
}