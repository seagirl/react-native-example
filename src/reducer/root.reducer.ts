import { combineReducers } from 'redux'
import { memberReducer } from './member.reducer'

export const rootReducer = combineReducers({
  member: memberReducer
})
