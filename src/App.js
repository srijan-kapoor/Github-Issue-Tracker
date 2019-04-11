import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Card />
      </React.Fragment>
    )
  }
}

export default App;
