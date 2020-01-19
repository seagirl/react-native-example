import { Member } from '../../entity'
import { Action } from '../'
import { Types } from './type'

export interface GetListPayload {
  members: Member[];
}

export const getListAction = (members: Member[]): Action<GetListPayload> => {
  return { type: Types.LIST_DATA_LOADED, payload: { members: members } }
}

export interface GetDetailPayload {
  member: Member;
}

export const getDetailAction = (member: Member): Action<GetDetailPayload> => {
  return { type: Types.DETAIL_DATA_LOADED, payload: { member: member } }
}

export interface SelectMemberPayload {
  member: Member;
}

export const selectMemberAction = (member: Member): Action<SelectMemberPayload> => {
  return { type: Types.SELECT_MEMBER, payload: { member: member } }
}

export interface SetRefreshingPayload {
  refreshing: boolean;
}

export const setRefreshingAction = (refreshing: boolean): Action<SetRefreshingPayload> => {
  return { type: Types.REFRESHING, payload: { refreshing: refreshing } }
}