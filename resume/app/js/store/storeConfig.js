import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevtools } from 'redux-devtools-extension';
import logger from '../middleware/logger';
import rootReducer from '../reducers/rootReducer';
import monitorReducerEnhancer from '../middleware/monitReducerEnhancer';

export default function configureStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [
    middlewareEnhancer,
    monitorReducerEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  const composeEnhancer = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancer);

  return store;
}
