// const path = require('path');

const express = require('express');
const data = require('./data/data.json');

const app = express();

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
