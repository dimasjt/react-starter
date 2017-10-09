import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CounterPage from "./pages/CounterPage"

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={CounterPage} />
    </Switch>
  </Router>
)

export default Routes
