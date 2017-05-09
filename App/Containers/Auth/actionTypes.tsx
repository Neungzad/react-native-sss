import { AuthState } from '../../types'

// type
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

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

export interface ActionLogoutRequest {
  type: 'LOGOUT_REQUEST'
}

export interface ActionLogoutSuccess {
  type: 'LOGOUT_SUCCESS'
}

export type ActionType = ActionLogingRequest | ActionLoginSuccess | ActionLogoutRequest | ActionLogoutSuccess
