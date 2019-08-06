import * as type from './actions-type.js'

const add_store = (arg) => {
  return {
    type: type.ADD_STORE,
    arg
  }
}

export default add_store;