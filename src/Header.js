import React from 'react'

function Header(props) {
	return (
		<div className='header'>
			<input type='text' onKeyPress={props.enter} onChange={props.funct}/>
			<button onClick={props.click} style={{background: 'black', color: 'white', fontSize:'20px'}}>Search</button>
		</div>
	)
}

export default Header;