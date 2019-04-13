import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from  './Header'
import Card from './Card'
import Loading from './Loading'
import Labels from './Labels';
import Popular from './Popular';


class App extends Component {
	state ={
		value: '',
		page: 1,
		loading: true,
		isFilter : true,
		isClicked: false,
		filterLabel: '',
		filtered : [],
		popular: [],
		popularName: '',
	}

	handleInputValue =(e) => {
		this.setState({value: e.target.value})
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		(this.state.popularName) ? (
			fetch(`https://api.github.com/repos/${this.state.popularName}/issues?page=${this.state.page}`).then(res => res.json()).then(data => {
			if(data.length) {
				this.props.dispatch({type: 'ADD_DATA', payload: data.map(v => ({...v, isClicked: false}))})
			} else {
				this.props.dispatch({type: 'ADD_DATA', payload: []})
			}
			this.setState({loading: false})
		})
		) 
		:
			(fetch(`https://api.github.com/repos/${this.state.value ? this.state.value.toLowerCase() : 'facebook/react'}/issues?page=${this.state.page}`).then(res => res.json()).then(data => {
			if(data.length) {
				this.props.dispatch({type: 'ADD_DATA', payload: data.map(v => ({...v, isClicked: false}))})
			} else {
				this.props.dispatch({type: 'ADD_DATA', payload: []})
			}
			this.setState({loading: false})
		}))
	}

	handleClick = (e) => {
		if(this.state.value !== '') {
			this.fetchData()
		}
		this.setState({page: 1, loading: true, value: ''})

	}

	getLabelValue = (data) => {
		const {author , name} = data;
		this.setState({popularName: `${author}/${name}`, page: 1})
		this.fetchData()

	}

	incrementPage = () => {
		this.setState({page: ++this.state.page, loading: true});
		this.fetchData()
	}

	decrementPage = () => {
		if(this.state.page > 1) {
			console.log('decrement')
			this.setState({page: this.state.page - 1, loading: true})
			this.fetchData()
		}
	}

	handleEnter = (e) => {
		if(e.key === 'Enter') {
			this.handleClick()
		}
	}

	handleFilter = (data) => {
		this.setState({ isFilter: !this.state.isFilter, filterLabel: data })
	}

  render() {
  	console.log(this.state)
  	let filtered = this.props.defaultArray.filter(val => { return val.labels.some(obj => obj.name.split(':')[0] === this.state.filterLabel)
		})
  	const isFilter = this.state.isFilter;

    return (
			<React.Fragment>
				<Header enter={this.handleEnter} inputValue={this.state.value} funct={this.handleInputValue} click={this.handleClick}/>
				{
					(this.state.loading) ? <Loading /> :
					(
						<>
							<Popular labelName={this.getLabelValue}/>
							<Labels filter={this.handleFilter} />
      				<Card inputValue={this.state.value} increment={this.incrementPage} decrement={this.decrementPage} data={(filtered.length && !isFilter ) ? filtered : this.props.defaultArray}/>
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
