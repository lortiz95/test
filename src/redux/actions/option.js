import { Actions } from 'react-native-router-flux';


const saveFeel = feel => async(dispatch) => {
  dispatch({type: 'SAVE_FEEL', payload: feel});
  Actions.push('FROM');
}

const saveCategory = (category, id) => async(dispatch) => {
  dispatch({type: 'SAVE_CATEGORY', payload: ({category, id})});
  Actions.push('THANKS');
}

export {
  saveFeel,
  saveCategory,
}