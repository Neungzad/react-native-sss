import { combineReducers } from 'redux'
import victims from './Victims/reducers'
import auth from './Auth/reducers'

export default combineReducers({
  victims,
  auth
})