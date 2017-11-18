import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunkMiddleware, logger())
)(createStore)

export default function configureStore(initialState = { todo: [], redditNews: { posts: [] } }) {
	return finalCreateStore(reducer, initialState)
}