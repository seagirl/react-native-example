import { MemberAPI } from '../../api'
import { Member } from '../../entity'
import { Action } from '../'
import { getListAction, getDetailAction, selectMemberAction, SelectMemberPayload, setRefreshingAction, SetRefreshingPayload } from './action'

export function getList () {
  return async (dispatch): Promise<void> => {
    try {
      const newMembers = await MemberAPI.default.getList()
      return dispatch(getListAction(newMembers || []))
    } catch (error) {
      console.log(error)
      return dispatch(setRefreshingAction(false))
    }
  }
}

export function getDetail (name: string) {
  return async (dispatch): Promise<void> => {
    const newMember = await MemberAPI.default.getDetail(name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeStatus (member: Member) {
  return async (dispatch): Promise<void> => {
    let newMember = await MemberAPI.default.changeStatus(member)
    newMember = await MemberAPI.default.getDetail(newMember.name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeStatusAndGetList (member: Member) {
  return async (dispatch): Promise<void> => {
    await changeStatus(member)(dispatch)
    await getList()(dispatch)
  }
}

export function changeColor (member: Member, colorId: number) {
  return async (dispatch): Promise<void> => {
    let newMember = await MemberAPI.default.changeColor(member, colorId)
    newMember = await MemberAPI.default.getDetail(newMember.name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeColorAndFetchAll (member: Member, colorId: number) {
  return async (dispatch): Promise<void> => {
    await changeColor(member, colorId)(dispatch)
    await getDetail(member.name)(dispatch)
    await getList()(dispatch)
  }
}

export function selectMember (member: Member): Action<SelectMemberPayload> {
  return selectMemberAction(member)
}

export function setRefreshing (refreshing: boolean): Action<SetRefreshingPayload> {
  return setRefreshingAction(refreshing)
}