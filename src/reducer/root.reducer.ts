import { combineReducers } from 'redux'
import { colorReducer } from './color.reducer'
import { memberReducer } from './member.reducer'

export const rootReducer = combineReducers({
  color: colorReducer,
  member: memberReducer,
})
