import types from '../action/types'

const initialState = {
  members: [],
  selectedMember: null
}

export function rootReducer (state = initialState, action) {
  switch (action.type) {
    case types.LIST_DATA_LOADED:
      return { members: action.payload.members, selectedMember: state.selectedMember }
    case types.DETAIL_DATA_LOADED:
      return { members: state.members, selectedMember: action.payload.member }
    case types.SELECT_MEMBER:
      return { members: state.members, selectedMember: action.payload.member }
    default:
      return state
  }
}