import {ADD_ARTICLE} from './../constants/index.js'

export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  payload: article
})
