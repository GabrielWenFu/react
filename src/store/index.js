import { combineReducers } from 'redux'

function todo (state = {count: 1 }, action) {
  switch (action.type) {
  case 'ADD_STORE':
    let num = {
      count:  state.count + 1
    }
    state = Object.assign({}, state, num)
    return state
  default:
    return state
  }
}
const rootReducer = combineReducers({todo});

export default rootReducer