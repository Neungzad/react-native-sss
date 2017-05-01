import { FETCH_ASSA_REQUEST, FETCH_ASSA_SUCCESS, ActionType } from './actionTypes'
import { AssaState } from '../../types'

const initialState: AssaState = {
  fetching: false,
  victims: {}
}

const assasinsReducer = (state = initialState, action: ActionType): AssaState => {
  switch (action.type) {
    case FETCH_ASSA_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_ASSA_SUCCESS:
      return {
        fetching: false,
        victims: action.payload.reduce(function (result: any, item: any) {
          result[item.id] = item
          return result
        }, {})
      }
    default:
      return state
  }
}

export default assasinsReducer