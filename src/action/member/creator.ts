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

export function changeStatus (member: Member) {
  return (dispatch): Promise<void> => {
    return MemberAPI.changeStatus(member)
      .then(member => {
        MemberAPI.getDetail(member.name)
          .then(member => {
            dispatch(getDetailAction(member))
          })
      })
  }
}

export function changeColor (member: Member, colorId: number) {
  return (): Promise<void> => {
    return MemberAPI.changeColor(member, colorId)
      .then(() => {
        return
      })
  }
}

export function selectMember (member: Member): Action<SelectMemberPayload> {
  return selectMemberAction(member)
}