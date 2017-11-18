import React, { Component } from 'react'

class NewsItem extends Component {
	render() {
		return (
			<li>
				{this.props.item}
			</li>
		);
	}
}

export default NewsItem