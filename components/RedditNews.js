import React, { Component } from 'react'
import NewsItem from './NewsItem'

class RedditNews extends Component {
	constructor() {
		super()
	}

	componentWillMount() {
		console.log('component will mount')
		this.props.action.fetchPosts().then(() => console.log('fetch complete'))
	}

	checkData() {
		//alert("checking...")
		this.props.action.fetchPosts()
	}

	componentDidMount() {
		console.log('component mounted ')
		setInterval(this.checkData.bind(this), 5000)
	}

	render() {
		return (
			<div>
				<h1>Reddit News</h1>
				{this.props.redditNews.items.map(item => {
					return <NewsItem item={item.title} key={item.id} />
				})}
			</div>
		);	
	}
}

export default RedditNews