import types from '../action/types'
import { MemberList, MemberDetail } from '../entity'

interface State {
  members: MemberList[];
  selectedMember: MemberDetail | null;
}

const initialState: State = {
  members: [],
  selectedMember: null
}

export function rootReducer (state = initialState, action): State {
  switch (action.type) {
    case types.LIST_DATA_LOADED:
      return { ...state, members: action.payload.members }
    case types.DETAIL_DATA_LOADED:
      return { ...state, selectedMember: action.payload.member }
    case types.SELECT_MEMBER:
      return { ...state, selectedMember: action.payload.member }
    default:
      return state
  }
}