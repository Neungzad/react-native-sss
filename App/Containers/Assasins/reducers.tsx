import {FETCH_ASSA_REQUEST, FETCH_ASSA_SUCCESS, ActionType, AssaObject} from './actionTypes'

interface AssaState {
  fetching: boolean
  victims: Map<number, AssaObject>
}

const initialState: AssaState = {
  fetching: false,
  victims: new Map()
}

const assasinsReducer = (state = initialState, action: ActionType): AssaState => {
  switch (action.type) {
    case FETCH_ASSA_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_ASSA_SUCCESS:
      return state
    default:
      return state
  }
}

export default assasinsReducer