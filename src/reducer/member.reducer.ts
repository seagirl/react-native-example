import { Types } from '../action/member/type'
import { Member } from '../entity'

interface State {
  refreshing: boolean;
  items: Member[];
  selected: Member | null;
}

const initialState: State = {
  refreshing: false,
  items: [],
  selected: null
}

export function memberReducer (state = initialState, action): State {
  switch (action.type) {
    case Types.LIST_DATA_LOADED:
      return { ...state, items: action.payload.members, refreshing: false }
    case Types.DETAIL_DATA_LOADED:
      return { ...state, selected: action.payload.member }
    case Types.SELECT_MEMBER:
      return { ...state, selected: action.payload.member }
    case Types.REFRESHING:
      return { ...state, refreshing: action.payload.refreshing }
    default:
      return state
  }
}