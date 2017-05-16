import { Victim } from '../../types'

// type
export const VICTIMS_REQUEST = 'VICTIMS_REQUEST'
export const VICTIMS_SUCCESS = 'VICTIMS_SUCCESS'
export const VICTIMS_FAILURE = 'VICTIMS_FAILURE'

export const VICTIM_ADD_REQUEST = 'VICTIM_ADD_REQUEST'
export const VICTIM_ADD_SUCCESS = 'VICTIM_ADD_SUCCESS'
export const VICTIM_ADD_FAILURE = 'VICTIM_ADD_FAILURE'

// type script
export interface ActionVictimsRequest {
  type: 'VICTIMS_REQUEST'
}

export interface ActionVictimsSuccess {
  type: 'VICTIMS_SUCCESS'
  payload: Array<Victim>
}

export interface ActionVictimAddSuccess {
  type: 'VICTIM_ADD_SUCCESS'
  payload: Victim
}

export interface ActionVictimAddRequest {
  type: 'VICTIM_ADD_REQUEST'
}

export type ActionType = ActionVictimsRequest | ActionVictimsSuccess | ActionVictimAddSuccess | ActionVictimAddRequest
