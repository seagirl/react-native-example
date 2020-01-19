import { MemberAPI } from '../../api'
import { Member } from '../../entity'
import { Action } from '../'
import { getListAction, getDetailAction, selectMemberAction, SelectMemberPayload } from './action'

export function getList () {
  return (dispatch): Promise<void> => {
    return MemberAPI.getList()
      .then(members => {
        dispatch(getListAction(members))
      })
  }
}

export function getDetail (name: string) {
  return (dispatch): Promise<void> => {
    return MemberAPI.getDetail(name)
      .then(member => {
        dispatch(getDetailAction(member))
      })
  }
}

export function selectMember (member: Member): Action<SelectMemberPayload> {
  return selectMemberAction(member)
}