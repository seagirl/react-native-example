import { ActionTypes } from '../action'
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
    case ActionTypes.LIST_DATA_LOADED:
      return { ...state, members: action.payload.members }
    case ActionTypes.DETAIL_DATA_LOADED:
      return { ...state, selectedMember: action.payload.member }
    case ActionTypes.SELECT_MEMBER:
      return { ...state, selectedMember: action.payload.member }
    default:
      return state
  }
}