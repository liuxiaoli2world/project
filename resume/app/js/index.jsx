import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootRouter from './Router';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, { personalInfo: { name: 'liuxiaoli' } });

const Root = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);

window.store = store;
render(<Root />, document.getElementById('root'));
