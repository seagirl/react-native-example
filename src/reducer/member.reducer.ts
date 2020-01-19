import { Types } from '../action/member'
import { Member } from '../entity'

interface State {
  items: Member[];
  selected: Member | null;
}

const initialState: State = {
  items: [],
  selected: null
}

export function memberReducer (state = initialState, action): State {
  switch (action.type) {
    case Types.LIST_DATA_LOADED:
      return { ...state, items: action.payload.members }
    case Types.DETAIL_DATA_LOADED:
      return { ...state, selected: action.payload.member }
    case Types.SELECT_MEMBER:
      return { ...state, selected: action.payload.member }
    default:
      return state
  }
}