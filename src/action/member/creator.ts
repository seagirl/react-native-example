import { MemberAPI } from '../../api'
import { Member } from '../../entity'
import { Action } from '../'
import { getListAction, getDetailAction, selectMemberAction, SelectMemberPayload, setRefreshingAction, SetRefreshingPayload } from './action'

export function getList () {
  return async (dispatch): Promise<void> => {
    try {
      const newMembers = await MemberAPI.getList()
      return dispatch(getListAction(newMembers || []))
    } catch {
      console.log('[ERROR] MemberAPI.getList')
      return dispatch(setRefreshingAction(false))
    }
  }
}

export function getDetail (name: string) {
  return async (dispatch): Promise<void> => {
    const newMember = await MemberAPI.getDetail(name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeStatus (member: Member) {
  return async (dispatch): Promise<void> => {
    let newMember = await MemberAPI.changeStatus(member)
    newMember = await MemberAPI.getDetail(newMember.name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeStatusAndGetList (member: Member) {
  return async (dispatch): Promise<void> => {
    const changeStatusPromise = changeStatus(member)
    await changeStatusPromise(dispatch)
    const getListPromise = getList()
    await getListPromise(dispatch)
  }
}

export function changeColor (member: Member, colorId: number) {
  return async (dispatch): Promise<void> => {
    let newMember = await MemberAPI.changeColor(member, colorId)
    newMember = await MemberAPI.getDetail(newMember.name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeColorAndGetDetail (member: Member, colorId: number) {
  return async (dispatch): Promise<void> => {
    const changeColorPromise = changeColor(member, colorId)
    await changeColorPromise(dispatch)
    const getDetailPromise = getDetail(member.name)
    await getDetailPromise(dispatch)
    const getListPromise = getList()
    await getListPromise(dispatch)
  }
}

export function selectMember (member: Member): Action<SelectMemberPayload> {
  return selectMemberAction(member)
}

export function setRefreshing (refreshing: boolean): Action<SetRefreshingPayload> {
  return setRefreshingAction(refreshing)
}