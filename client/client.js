import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'
import 'babel-polyfill'

var initialState = {
  todo: [{
    id: 1,
    task: "First task ",
    complete: false
  },
  {
    id: 2,
    task: "Second task ",
    complete: false
  }],
  redditNews: {
    items: [{
      title: '',
      id: ''
    }]
  }
};

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
