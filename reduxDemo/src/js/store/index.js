import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const store = createStore(rootReducer)
store.subscribe(() => console.log('hha'))
export default store
