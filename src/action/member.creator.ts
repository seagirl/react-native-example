import { MemberAPI } from '../api'
import types from './types'
import { Action } from './'

export function getList () {
  return (dispatch): Promise<void> => {
    return MemberAPI.getList()
      .then(members => {
        dispatch({ type: types.LIST_DATA_LOADED, payload: { members: members } })
      })
  }
}

export function getDetail (name: string) {
  return (dispatch): Promise<void> => {
    return MemberAPI.getDetail(name)
      .then(member => {
        dispatch({ type: types.DETAIL_DATA_LOADED, payload: { member: member } })
      })
  }
}

export function selectMember (member): Action {
  return { type: types.SELECT_MEMBER, payload: { member: member } }
}