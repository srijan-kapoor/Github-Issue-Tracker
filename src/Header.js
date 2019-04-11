import React from 'react';

class Header extends React.Component {

	render (){
		return (
			<header className="primary header">
				<div>
						<h1>github issue tracker</h1>
						<a href="#"><img src="" alt="site logo"/></a>
				</div>

				<div className="input-box">
					<input placeholder="Add username and repo name to search an issue" />
					<span>search icon</span>
				</div>
			</header>
		)
	}
}

export default Header;