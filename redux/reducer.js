import { Add_Todo, Delete_Todo, Mark_Completed, Request_Post, Receive_Post } from './action'

function getId(state) {
	return state.todo.reduce((maxId, x) => {
		return Math.max(x.id, maxId)
	}, -1) + 1
}

let reducer = function(state, action) {
	switch(action.type) {
		case 'Add_Todo':
			return Object.assign({}, state, {
				todo: [{
					complete: false,
					task: action.text,
					id: getId(state)
				}, ...state.todo]
			})
		case 'Delete_Todo':
			return Object.assign({}, state, {
				todo: state.todo.filter((x)=> {
					return action.id !== x.id
				})
			})
		case 'Mark_Completed':
			return Object.assign({}, state, {
				todo: state.todo.map((x) => {
					return action.id == x.id ? Object.assign({}, x, { complete: !x.complete }) : x
				})
			})
		case 'Request_Post':
			return Object.assign({}, state, {
				redditNews: {
					isFetching: true
				}
			})
		case 'Receive_Post':
			return Object.assign({}, state, {
				redditNews: {
					isFetching: false,
					items: action.posts,
					lastUpdated: action.receivedAt
				}
			})
		default: 
			return state
	}
}

export default reducer