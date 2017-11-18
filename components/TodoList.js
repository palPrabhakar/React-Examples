import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
	render() {
		return (
			<div>
				<h2>Todo Task List</h2> 
				<ul>
				{
					this.props.todolist.map((todo) => {
						return <Todo key={todo.id} todo={todo} action={this.props.action} />
					})
				}
				</ul>
			</div>
		);
	}
}

export default TodoList 