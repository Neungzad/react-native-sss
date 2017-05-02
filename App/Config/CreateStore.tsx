import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Containers/RootReducer'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'

export default () => {
  // logger
  const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent
  const logger = createLogger({
    predicate: (_a, _b) => isDebuggingInChrome,
    collapsed: true,
    duration: true
  })

  // config store
  const createETStore = applyMiddleware(thunk, logger)(createStore)
  const store = autoRehydrate()(createETStore)(RootReducer)

  // AsyncStorage
  /*const configStore = {
    blacklist: [],
    storage: AsyncStorage
  }

  persistStore(store, configStore, () => {
    const state = store.getState()

    console.log('load persistStore completed = ', state)
  })*/

  return store
}