import { getCategories } from '../../services/queries';

const categories = () => async(dispatch) => {
  getCategories()
}

export {
  categories,
}