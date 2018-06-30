import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../app/js/reducers/rootReducer';
import { renderToString } from 'react-dom/server';
import RootRouter from '../app/js/Router';

const data = require('./data/data.json');

const app = Express();

app.use('static', Express.static('static'));

function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // 警告：关于在 HTML 中嵌入 JSON 的安全问题，请查看以下文档
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  const store = createStore(rootReducer);
  const html = renderToString(<Provider store={store}>
    <RootRouter />
                              </Provider>);

  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

app.use(handleRender);

// 设置跨域访问
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/personalInfo', (req, res) => {
  res.send(data.personal_information);
});

const port = 8090;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
