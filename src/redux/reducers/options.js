const initialState = {
  status: 'INIT',
  feel: '',
  option: '',
  categories: null,
  category: null,
}

export default news = (state= initialState , action = {}) => {
  switch (action.type) {

    case 'SAVE_FEEL':
      return {
        ...state,
        feel: action.payload,
      }

    case 'SAVE_CATEGORY':
      return {
        ...state,
        category: action.payload.category,
        category_id: action.payload.id,
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    case 'CLEAR_CATEGORY':
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state;
  }
}



