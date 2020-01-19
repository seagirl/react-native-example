import { MemberAPI } from '../api'
import { Action, MemberAction } from './'

const Types = MemberAction.Types

export function getList () {
  return (dispatch): Promise<void> => {
    return MemberAPI.getList()
      .then(members => {
        dispatch({ type: Types.LIST_DATA_LOADED, payload: { members: members } })
      })
  }
}

export function getDetail (name: string) {
  return (dispatch): Promise<void> => {
    return MemberAPI.getDetail(name)
      .then(member => {
        dispatch({ type: Types.DETAIL_DATA_LOADED, payload: { member: member } })
      })
  }
}

export function selectMember (member): Action {
  return { type: Types.SELECT_MEMBER, payload: { member: member } }
}