export interface AppState {
  victims: VictimsState
  auth: AuthState
}

export interface ImageType {
  customButton: string
  didCancel: boolean
  error: string
  data: string
  uri: string
  origURL?: string
  isVertical: boolean
  width: number
  height: number
  fileSize: number
  type?: string
  fileName?: string
  path?: string
  latitude?: number
  longitude?: number
  timestamp?: string
}

/********* Victims State **********/

export interface Victim {
  id: number
  name: string
  imgPath?: string
  nickname: string
  reward: string
  userId: number
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