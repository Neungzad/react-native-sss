import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from '../Config/CreateStore'
import RootContainer from './RootContainer'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

export interface Props { }
export interface State { }

class App extends Component<Props, State> {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
