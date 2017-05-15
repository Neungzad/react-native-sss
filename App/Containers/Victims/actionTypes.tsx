import { Victim } from '../../types'

// type
export const VICTIMS_REQUEST = 'VICTIMS_REQUEST'
export const VICTIMS_SUCCESS = 'VICTIMS_SUCCESS'
export const VICTIMS_FAILURE = 'VICTIMS_FAILURE'

export const VICTIM_ADD_SUCCESS = 'VICTIM_ADD_SUCCESS'

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

export type ActionType = ActionVictimsRequest | ActionVictimsSuccess | ActionVictimAddSuccess
