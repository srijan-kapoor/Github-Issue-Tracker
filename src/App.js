import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from  './Header'

class App extends Component {
	state ={
		value: '',
		page: 1,
	}
	handleInputValue =(e) => {
		this.setState({value: e.target.value})
	}
	componentDidMount() {
		fetch(`https://api.github.com/repos/google/googletest/issues?page=${this.state.page}`).then(res => res.json()).then(data => this.props.dispatch({type: 'ADD_DATA', payload: data}))
	}
	handleClick =() => {
		fetch(`https://api.github.com/repos/${this.state.value}/issues?page=${this.state.page}`).then(res => res.json()).then(data => this.props.dispatch({type: 'ADD_QUERY', payload: data}))
	}
	handleEnter = (e) => {
		if(e.key === 'Enter') {
			this.handleClick()
		}
	}
  render() {
  	console.log(this.props)
    return (
      <div className="App">
        <p>hello</p>
        <Header enter={this.handleEnter}funct={this.handleInputValue} click={this.handleClick} />
      </div>
    )
  }
}

export default connect()(App);
