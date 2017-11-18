import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import { bindActionCreators } from 'redux'
import action from '../redux/action'
import { connect } from 'react-redux'
import RedditNews from './RedditNews'


class App extends Component {
	render() {
		return (
			<div>
				<h1>React To Do App</h1>
				<TodoInput action={this.props.action} />
				<TodoList todolist={this.props.todo} action={this.props.action} />
				<RedditNews redditNews={this.props.redditNews} action={this.props.action}/>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(action, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)