import { Types } from '../action/config/type'

interface State {
  id: string;
  password: string;
}

const initialState: State = {
  id: null,
  password: null,
}

export function configReducer (state = initialState, action): State {
  switch (action.type) {
    case Types.DATA_SAVED:
      return { id: action.payload.id, password: action.payload.password }
    case Types.DATA_LOADED:
      return { id: action.payload.id, password: action.payload.password }
    case Types.SET_ID:
      return { ...state, id: action.payload.id }
    case Types.SET_PASSWORD:
      return { ...state, password: action.payload.password }
    default:
      return state
  }
}