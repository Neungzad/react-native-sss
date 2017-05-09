import { combineReducers } from 'redux'
import victims from './Victims/reducers'
import auth from './Auth/reducers'
import {AppState} from '../types'

export default combineReducers<AppState>({
  victims,
  auth
})