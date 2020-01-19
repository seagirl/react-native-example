import { combineReducers } from 'redux'
import { colorReducer } from './color.reducer'
import { configReducer } from './config.reducer'
import { memberReducer } from './member.reducer'

export const rootReducer = combineReducers({
  color: colorReducer,
  config: configReducer,
  member: memberReducer,
})
