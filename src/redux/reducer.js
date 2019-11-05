/**
 * Reducer actions
 */

export const setTest = data => ({ type: 'SET_TEST', data })

/**
 * Reducer
 */

export const reducer = (state, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'SET_TEST':
      return { ...newState, test: action.data }

    default:
      return newState
  }
}
