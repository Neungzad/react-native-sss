export interface AppState {
  victims: VictimsState,
  auth: AuthState
}

/********* Victims State **********/

export interface Victim {
  id: number
  name: string
  imgPath?: string
  nickname: string
  reward: string,
  userId: number,
  image?: {
    data: string,
    type: string,
    uri: string,
    fileName: string
  }
}

export interface VictimsState {
  isFetching: boolean
  byId: { [key: string]: Victim }
}

/********* Auth State *********/

export interface AuthState {
  isFetching: boolean
  token?: string
  ttl?: number
  created?: Date
  userId?: number
}