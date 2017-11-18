
export const Add_Todo = 'Add_Todo'
export const Delete_Todo = 'Delete_Todo'
export const Mark_Completed = 'Mark_Completed'
export const Request_Post = 'Request_Post'
export const Receive_Post = 'Receive_Post'
import fetch from 'isomorphic-fetch'


let action = {
	addTodo: function(text) {
		return {
			type: Add_Todo,
			text
		}
	},
	deleteTodo: function(id) {
		return {
		type: Delete_Todo,
		id
		} 
	},
	markCompleted: function(id) {
		return {
		type: Mark_Completed,
		id
		} 
	},
	requestPost: function() {
		return {
			type: Request_Post,
		}
	},
	receivePosts: function(json) {
		return {
			type: Receive_Post,
			posts: json.data.children.map(child => child.data),
			receivedAt: Date.now()
		}
	},
	fetchPosts: function() {
		return dispatch => {
			//dispatch(action.requestPost())
			return fetch('http://www.reddit.com/r/news/new.json').then(response => response.json()).then(json => dispatch(action.receivePosts(json)))
		}
	}

}

export default action
