import { VICTIMS_REQUEST, VICTIMS_SUCCESS, VICTIM_ADD_SUCCESS, VICTIM_ADD_REQUEST, ActionType } from './actionTypes'
import { VictimsState } from '../../types'

const initialState: VictimsState = {
  isFetching: false,
  byId: {}
}

const assasinsReducer = (state = initialState, action: ActionType): VictimsState => {
  switch (action.type) {
    case VICTIMS_REQUEST:
    case VICTIM_ADD_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case VICTIMS_SUCCESS:
      return {
        isFetching: false,
        byId: action.payload.reduce(function (result: any, item: any) {
          result[item.id] = item
          return result
        }, {})
      }
    case VICTIM_ADD_SUCCESS:
      let victims = {...state.byId}
      victims[action.payload.id] = action.payload
      return {
        ...state,
        byId: victims
      }
    default:
      return state
  }
}

export default assasinsReducer