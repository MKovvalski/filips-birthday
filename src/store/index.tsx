import rootReducer from './reducers'
import { createStore } from 'redux'

export const store = createStore(
  rootReducer,
  // @ts-ignore TODO: remove ignore afterwards
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
