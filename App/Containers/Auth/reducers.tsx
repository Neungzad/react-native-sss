import { LOGIN_REQUEST, LOGIN_SUCCESS, ActionType } from './actionTypes'
import { AuthState } from '../../types'

const initialState: AuthState = {
  isFetching: false
}

const authReducer = (state = initialState, action: ActionType): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        token: action.payload.token,
        ttl: action.payload.ttl,
        created: action.payload.created,
        userId: action.payload.userId
      }
    default:
      return state
  }
}

export default authReducer

