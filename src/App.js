import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from  './Header'
import Card from './Card'

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
	incrementPage = () => {
		this.setState({page: this.state.page++});
		this.handleClick();
		console.log(this.state.page ,'increment')
	}
	handleEnter = (e) => {
		if(e.key === 'Enter') {
			this.handleClick()
		}
	}
  render() {
  	console.log(this.props);
    return (
      <React.Fragment>
        <Header enter={this.handleEnter} funct={this.handleInputValue} click={this.handleClick}/>
        <Card increment={this.incrementPage} data={this.props.queriedArray.length ? this.props.queriedArray: this.props.defaultArray }/>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
	return {	
		defaultArray: state.Issues,
		queriedArray: state.QueryIssues,
	}
}

export default connect(mapStateToProps)(App);
