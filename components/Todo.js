import React, {Component} from 'react'

class Todo extends Component {

	handleDelete() {
		//console.log(this.props.todo.id)
		this.props.action.deleteTodo(this.props.todo.id)
	}

	handleComplete() {
		this.props.action.markCompleted(this.props.todo.id)
	}

	render() {
		return (
			<li>
				<div>{this.props.todo.task}</div>
				<button onClick={this.handleComplete.bind(this)}>Mark Completed</button>
				<button onClick={this.handleDelete.bind(this)}>Delete</button>
			</li>
		);	
	}
}

export default Todo