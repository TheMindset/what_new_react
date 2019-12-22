import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import entertainment from '../../data/entertainment'
import health from '../../data/science'
import science from '../../data/science'
import technology from '../../data/technology'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      health,
      entertainment,
      science,
      technology
    }
    this.state.current = local

  }


  handleButton = event => {
    const { name } = event.target
    console.log(name)
    this.setState({ 
      current: this.state[name]
    })
  }

  render () {
    return (
      <div className="app">
        <Menu handleButton={this.handleButton}/>
        <NewsContainer news={this.state.current} />
      </div>
    );
  }
}

export default App;
