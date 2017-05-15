import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Containers/RootReducer'
import { createLogger } from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AppState } from '../types'

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
  const store = autoRehydrate<AppState>()(createETStore)(RootReducer)

  // AsyncStorage
  const configStore = {
    blacklist: [],
    storage: AsyncStorage
  }

  persistStore(store, configStore, () => {
    const state = store.getState()

    if (state.auth.userId) {
      Actions.victimListView()
    } else {
      Actions.login()
    }
  })

  return store
}