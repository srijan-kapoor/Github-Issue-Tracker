import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from  './Header'
import Card from './Card'
import Loading from './Loading'
import Labels from './Labels';


class App extends Component {
	state ={
		value: '',
		page: 1,
		loading: true,
	}

	handleInputValue =(e) => {
		this.setState({value: e.target.value})
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		console.log('fetching data')
		fetch(`https://api.github.com/repos/${this.state.value ? this.state.value.toLowerCase() : 'google/googletest'}/issues?page=${this.state.page}`).then(res => res.json()).then(data => {
			this.props.dispatch({type: 'ADD_DATA', payload: data})
			this.setState({loading: false})
		})
			
	}

	handleClick =() => {
		this.fetchData()
		this.setState({loading: true})
	}

	incrementPage = () => {
		this.setState({page: ++this.state.page, loading: true});
		this.fetchData()
	}

	decrementPage = () => {
		this.setState({page: this.state.page - 1, loading: true})
		this.fetchData()
	}

	handleEnter = (e) => {
		if(e.key === 'Enter') {
			this.handleClick()
		}
	}

	handleFilter = (data) => {
		// this.setState({type: data, })
	// 	data.filter(val => { return val.labels.some(obj => obj.name.split(':')[0] == "Type") 
	// })

  render() {
    return (
			<React.Fragment>
				{
					(this.state.loading) ? <Loading /> :
					(
						<>
							<Header enter={this.handleEnter} funct={this.handleInputValue} click={this.handleClick}/>
							<Labels filter={this.handleFilter} />
      				<Card increment={this.incrementPage} decrement={this.decrementPage}data={this.props.defaultArray}/>
      			</>
      		)
				}
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
