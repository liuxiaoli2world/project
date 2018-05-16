import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BaseLayout from './clients/pages/Layout'
// import App from './App'

const App =  () =>(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('app'))
