import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MyRouter from './../routers/router'

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container">{MyRouter}</div>
    <footer>React Router v4 Browser Example (c) 2017</footer>
  </div>
)

export default BaseLayout