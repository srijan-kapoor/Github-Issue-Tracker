import React from 'react';

class Slider extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			playing: false,
			count: 100,
			counter: 0,
			countPerMeasure: 2
		}
	}

	handleCountChange = (event) => {
		const count = event.target.value;
		this.setState({count});
	}

	render() {
		const {playing, count} = this.state;

		return (
			<div className="slider">
				<div className="count-slider">
					<div>{count} Count</div>
					<input type="range" min="5" max="150" value={count} onChange={this.handleCountChange}/>
				</div>
				<button>{playing ? 'Stop' : 'Start'}</button>
			</div>
		)
	}
}

export default Slider;
