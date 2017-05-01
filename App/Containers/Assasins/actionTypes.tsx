import { AssaObject } from '../../types'

// type
export const FETCH_ASSA_REQUEST = 'FETCH_ASSA_REQUEST'
export const FETCH_ASSA_SUCCESS = 'FETCH_ASSA_SUCCESS'

// type script
export interface ActionFetchRequest {
  type: 'FETCH_ASSA_REQUEST'
}

export interface ActionFetchSuccess {
  type: 'FETCH_ASSA_SUCCESS'
  payload: Array<AssaObject>
}

export type ActionType = ActionFetchRequest | ActionFetchSuccess
