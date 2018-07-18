import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './../components/Home'
import About from './../components/About'

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
)
