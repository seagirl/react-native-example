import { Types } from '../action/color/type'
import { Color } from '../entity'

interface State {
  items: Color[];
}

const initialState: State = {
  items: []
}

export function colorReducer (state = initialState, action): State {
  switch (action.type) {
    case Types.LIST_DATA_LOADED:
      return { ...state, items: action.payload.colors }
    default:
      return state
  }
}