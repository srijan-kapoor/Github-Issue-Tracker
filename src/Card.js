import React from 'react';
import Issue from './Issue';

class Card extends React.Component {
	state = {
		data: [],
	}

	componentDidMount () {
		fetch(`https://api.github.com/repos/rails/rails/issues?page=0`).then(res => res.json()).then(data => this.setState({data: data}));
	}

	render (){
		// console.log(this.state);
		return (
			<div className="main-card-section">
				<button className="scroll-btn"> b </button>
				<button className="scroll-btn"> f </button>
				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Issue data={this.state.data} />
			</div>
		)
	}
}

export default Card; 
