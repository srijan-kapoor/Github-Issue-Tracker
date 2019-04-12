import React from 'react';
import Issue from './Issue';

class Card extends React.Component {
	render(){
		console.log(this.props)
		return (
			<div className="main-card-section">
				<button onClick={this.props.decrement} className="scroll-btn"> Previous </button>
				<button onClick={this.props.increment} className="scroll-btn after"> Next </button>
				{
					this.props.data.length ? <Issue data={this.props.data} /> : <h1 style={{display:'block', textAlign:'center', fontSize:'30px', color: 'red', margin: '0 auto'}}>Error Loading Repo 0f: {this.props.inputValue ? this.props.inputValue : 'Forbidden'}</h1>
				}
			</div>
		)
	}
}

export default Card; 
