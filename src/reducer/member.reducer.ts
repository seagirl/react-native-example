import { ActionTypes } from '../action'
import { MemberList, MemberDetail } from '../entity'

interface State {
  items: MemberList[];
  selected: MemberDetail | null;
}

const initialState: State = {
  items: [],
  selected: null
}

export function memberReducer (state = initialState, action): State {
  switch (action.type) {
    case ActionTypes.LIST_DATA_LOADED:
      return { ...state, items: action.payload.members }
    case ActionTypes.DETAIL_DATA_LOADED:
      return { ...state, selected: action.payload.member }
    case ActionTypes.SELECT_MEMBER:
      return { ...state, selected: action.payload.member }
    default:
      return state
  }
}