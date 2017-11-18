import React, {Component} from 'react'

class TodoInput extends Component {

	constructor() {
		super(),
		this.state = {
			input: ''
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action.addTodo(this.state.input)
		this.setState({input: ''})
	}

	handleChange(e) {
		//console.log(e.target.value);
		this.setState({input: e.target.value})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.input} placeholder="Input To Do Task" onChange={this.handleChange.bind(this)}/>
				<input type="submit"  value="Add Task" />
			</form>
		);
	}
}

export default TodoInput