import { ADD_ARTICLE } from '../constants/index.js'

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log(state)
      return [...state, action.payload]
    default:
      return state
  }
}

export default articleReducer
