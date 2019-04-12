import React from 'react';
import Issue from './Issue';

class Card extends React.Component {
	render(){
		return (
			<div className="main-card-section">

				<button onClick={this.props.decrement} className="scroll-btn"> Previous </button>
				<button onClick={this.props.increment} className="scroll-btn after"> Next </button>

				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Issue data={this.props.data} />
			</div>
		)
	}
}

export default Card; 
