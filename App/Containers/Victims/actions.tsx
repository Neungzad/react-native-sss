import { VICTIMS_REQUEST, VICTIMS_SUCCESS, VICTIM_ADD_SUCCESS, VICTIM_ADD_REQUEST } from './actionTypes'
import appConfig from '../../Config/appConfig'
import { Victim, ImageType } from '../../types'
import { Actions } from 'react-native-router-flux'

const loadVictims = () => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: VICTIMS_REQUEST })

    const state = getState()

    try {
      // fetch api
      const res = await fetch(`${appConfig.API_URL}/Victims`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': state.auth.token
        }
      })
      const result = await res.json()

      if (result.error) {
        Actions.login()
      } else {
        // dispatch action success
        dispatch({
          type: VICTIMS_SUCCESS,
          payload: result
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}


const addVictim = (victimForm: Victim, image: ImageType) => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: VICTIM_ADD_REQUEST })

    const state = getState()

    try {
      // image
      let formdata = new FormData()
      let file: any = {
        uri: image.uri,
        type: image.type,
        name: image.fileName
      }
      formdata.append('file', file)

      // upload img
      const res = await fetch(`${appConfig.API_URL}/Victims/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': state.auth.token
        },
        body: formdata
      })

      const result = await res.json()
      if (result.error) {
        // dispatch fail
      } else {

        // add victim
        const resAdd = await fetch(`${appConfig.API_URL}/Victims`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': state.auth.token
          },
          body: JSON.stringify({
            name: victimForm.name,
            nickname: victimForm.nickname,
            reward: victimForm.reward,
            imgPath: result.name,
            user_id: state.auth.userId
          })
        })

        const resultAdd = await resAdd.json()
        if (resultAdd.error) {
          // TODO::dispatch fail
          alert(resultAdd.error.message)
        } else {
          dispatch({
            type: VICTIM_ADD_SUCCESS,
            payload: resultAdd
          })
        }
      }
    } catch (e) {
      // TODO::dispatch fail
      console.log(e)
    }


    /*try {
      // fetch api
    } catch (e) {
      console.log(e)
    }*/

    /*let formdata = new FormData()

    if (victimForm.image) {
      try {
        let file: any = {
          uri: victimForm.image.uri,
          type: victimForm.image.type,
          name: victimForm.image.fileName
        }

        formdata.append('file', file)

        formdata.append('name', victimForm.name)
        formdata.append('nickname', victimForm.nickname)
        formdata.append('reward', victimForm.reward)
        formdata.append('userId', state.auth.userId)

        const res = await fetch(`${appConfig.API_URL}/Victims/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': state.auth.token
          },
          body: formdata
        })

        const result = await res.json()
        if (result.error) {
          alert(result.error.message)
        } else {
          dispatch({
            type: VICTIM_ADD_SUCCESS,
            payload: result
          })
        }
      } catch (err) {
        console.log(err)
      }
    }*/

  }
}

export { loadVictims, addVictim }