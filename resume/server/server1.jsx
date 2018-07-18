// import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import rootReducer from '../app/js/reducers/rootReducer';
import App from '../app/js/App';

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
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  const store = createStore(rootReducer);
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}><App /></StaticRouter>
    </Provider>);
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

app.use(handleRender);

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
