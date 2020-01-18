import { MemberAPI } from '../api'
import types from './types'

export function getList() {
  return function(dispatch) {
    return MemberAPI.getList()
      .then(members => {
        dispatch({ type: types.LIST_DATA_LOADED, payload: { members: members } })
      })
  };
}

export function getDetail(name: string) {
  return function(dispatch) {
    return MemberAPI.getDetail(name)
      .then(member => {
        dispatch({ type: types.DETAIL_DATA_LOADED, payload: { member: member } })
      })
  };
}