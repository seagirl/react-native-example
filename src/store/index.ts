import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducer/index'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)
export default store