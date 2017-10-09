import React from "react"
import { Provider } from "react-redux"
import PropTypes from "prop-types"

// import { history } from "../store/createStore"

import Routes from "../routes"

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
