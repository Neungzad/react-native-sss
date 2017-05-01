export interface GlobalState {
  assasins: AssaState
}

/********* Victim **********/

export interface AssaObject {
  id: number
  name: string
  imgPath: string
  nickname: string
  reward: string
}

export interface AssaState {
  fetching: boolean
  victims: { [key: string]: AssaObject }
}