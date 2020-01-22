import AsyncStorage from '@react-native-community/async-storage'
import { getList } from '../member/creator'
import { getDataAction, setDataAction } from './action'

export function getData () {
  return async (dispatch): Promise<void> => {
    try {
      const id = await AsyncStorage.getItem('config/id')
      const password = await AsyncStorage.getItem('config/password')
      return dispatch(getDataAction(id, password))
    } catch (error) {
      console.log(error)
    }
  }
}

export function setData (id: string, password: string) {
  return async (dispatch): Promise<void> => {
    try {
      await AsyncStorage.setItem('config/id', id)
      await AsyncStorage.setItem('config/password', password)
      return dispatch(setDataAction(id, password))
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDataAndGetMemberList () {
  return async (dispatch): Promise<void> => {
    const getDataPromise = getData()
    await getDataPromise(dispatch)
    const getListPromise = getList()
    await getListPromise(dispatch)
  }
}

export function setDataAndGetMemberList (id: string, password: string) {
  return async (dispatch): Promise<void> => {
    const setDataPromise = setData(id, password)
    await setDataPromise(dispatch)
    const getListPromise = getList()
    await getListPromise(dispatch)
  }
}

export { setIdAction as setId } from './action'
export { setPasswordAction as setPassword } from './action'
