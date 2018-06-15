import { ADD_RECIPE } from '../constants/actions-type';

const addRecipe = recipe => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export default addRecipe;
