import { MemberAPI } from '../api'
import { Action, ActionTypes } from './'

export function getList () {
  return (dispatch): Promise<void> => {
    return MemberAPI.getList()
      .then(members => {
        dispatch({ type: ActionTypes.LIST_DATA_LOADED, payload: { members: members } })
      })
  }
}

export function getDetail (name: string) {
  return (dispatch): Promise<void> => {
    return MemberAPI.getDetail(name)
      .then(member => {
        dispatch({ type: ActionTypes.DETAIL_DATA_LOADED, payload: { member: member } })
      })
  }
}

export function selectMember (member): Action {
  return { type: ActionTypes.SELECT_MEMBER, payload: { member: member } }
}