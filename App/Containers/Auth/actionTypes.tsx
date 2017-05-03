import { AuthState } from '../../types'

// type
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// type script
export interface ActionLogingRequest {
  type: 'LOGIN_REQUEST'
  payload: {
    email: string
    password: string
  }
}

export interface ActionLoginSuccess {
  type: 'LOGIN_SUCCESS'
  payload: AuthState
}

export type ActionType = ActionLogingRequest | ActionLoginSuccess
