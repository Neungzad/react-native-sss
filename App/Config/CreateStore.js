import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Containers/RootReducer'
import { createLogger } from 'redux-logger'
var { persistStore, autoRehydrate } = require('redux-persist')

export default () => {
  // logger
  const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent
  const logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
  })

  // config store 
  const createETStore = applyMiddleware(thunk, logger)(createStore)
  const store = autoRehydrate()(createETStore)(RootReducer)

  return store
}