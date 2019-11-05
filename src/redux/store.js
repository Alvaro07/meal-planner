import { reducer } from './reducer'
import { createStore } from 'redux'

/**
 * Initial state
 */

const initialState = {
  test: 1
}

/**
 * Redux store
 */

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
