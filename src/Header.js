import React from 'react';

class Header extends React.Component {

	render (){
		return (
			<header className="primary-header">
				<div className="logo">
					<h1>github issue tracker</h1>
					{/*<a href="#"><img src="" alt="site logo"/></a>*/}
				</div>
				<input className="input" placeholder="Add username/repo to search" />
			</header>
		)
	}
}

export default Header;