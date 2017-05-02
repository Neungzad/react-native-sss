export interface AppState {
  victims: VictimsState
}

/********* Victims State **********/

export interface Victim {
  id: number
  name: string
  imgPath: string
  nickname: string
  reward: string
}

export interface VictimsState {
  isFetching: boolean
  byId: { [key: string]: Victim }
}