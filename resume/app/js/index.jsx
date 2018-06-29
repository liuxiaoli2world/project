import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RootRouter from './Router';
import configureStore from './store/storeConfig';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);

window.store = store;
render(<Root />, document.getElementById('root'));
