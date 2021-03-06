import React from 'react';
import {connect} from 'react-redux';

class Popular extends React.Component {
	state = {
		popularRepos: [],
		}

	componentDidMount = () => {
		fetch('https://github-trending-api.now.sh/repositories').then(res => res.json()).then(data => {
		this.props.dispatch({
			type: 'ADD_TRENDING_REPOS',
			popularData: data.map(item => {
			  return {
			  	name:item.name,
			    author:item.author,
			    url: item.url,
			  }
			})
		})
	})
}

		// this.setState({popularRepos: data})
		// this.props.dispatch({type: 'ADD_TRENDING_REPOS', popularData: popularData }) 


	render() {
		console.log(this.state)
		console.log(this.props)

		return (
						<div className="repos">
						<p>Trending</p>
							{
								this.props.repos.map((item,i) => {
										return (
											<a onClick={() => this.props.labelName(item)} key={i}href='#'>
												<button className="pop-repo">{item.name}</button>
											</a>
										)
									})
							}
						</div>
					)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		repos: state.popularRepos
	}
}

export default connect(mapStateToProps)(Popular);