import { API } from '../../api'
import { Member } from '../../entity'
import { getListAction, getDetailAction, setRefreshingAction } from './action'

const api = API.member

export function getList () {
  return async (dispatch): Promise<void> => {
    try {
      const newMembers = await api.getList()
      return dispatch(getListAction(newMembers || []))
    } catch (error) {
      console.log(error)
      return dispatch(setRefreshingAction(false))
    }
  }
}

export function getDetail (name: string) {
  return async (dispatch): Promise<void> => {
    const newMember = await api.getDetail(name)
    return dispatch(getDetailAction(newMember))
  }
}

export function changeStatus (member: Member) {
  return async (dispatch): Promise<void> => {
    let newMember = await api.changeStatus(member)
    newMember = await api.getDetail(newMember.name)
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
    let newMember = await api.changeColor(member, colorId)
    newMember = await api.getDetail(newMember.name)
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

export { selectMemberAction as selectMember } from './action'
export { setRefreshingAction as setRefreshing } from './action'
