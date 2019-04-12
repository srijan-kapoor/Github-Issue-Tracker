import React from 'react';

class Header extends React.Component {

	render (){
		return (
			<header className="primary-header">
				<div className="logo">
					<h1>github issue tracker</h1>
					<a href="#"></a>
				</div>
				<div className="input-box">
					<input className="input-text" type='text' onKeyPress={this.props.enter} onChange={this.props.funct} placeholder="username/repo" />
					<button onClick={this.props.click}>search</button>
				</div>
			</header>
		)
	}
}

export default Header;