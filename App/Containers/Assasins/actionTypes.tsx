export const FETCH_ASSA_REQUEST = 'FETCH_ASSA_REQUEST'
export const FETCH_ASSA_SUCCESS = 'FETCH_ASSA_SUCCESS'

export interface ActionFetchRequest {
  type: 'FETCH_ASSA_REQUEST'
}

export interface AssaObject {
  id: number
  name: string
  imgPath: string
  nickname: string
  reward: string
}

export interface ActionFetchSuccess {
  type: 'FETCH_ASSA_SUCCESS'
  paylod: Array<AssaObject>
}

export type ActionType = ActionFetchRequest | ActionFetchSuccess
