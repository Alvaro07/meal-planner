import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Context from './Context'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Provider>,
  document.getElementById('app')
)
