import React from 'react';

class Labels extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}

	handleFilterEvent = (e) => {
		this.props.handleFilter(e.target.name) 
	}

	render() {
		return (
			<React.Fragment>
				<div className="labels-main">
					<div>Filter:</div>
					<button onClick={this.handleFilterEvent} name="Bug" className="label bug">Bug</button>
					<button onClick={this.handleFilterEvent} name="Difficulty" className="label level">Difficulty</button>
					<button onClick={this.handleFilterEvent} name="Type" className="label type">Type</button>
					<button onClick={this.handleFilterEvent} name="Components" className="label component">Components</button>
				</div>
			</React.Fragment>
		)
	}
}

export default Labels;

