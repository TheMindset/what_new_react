import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import entertainment from '../../data/entertainment'
import health from '../../data/science'
import science from '../../data/science'
import technology from '../../data/technology'

class App extends Component {
  constructor() {
    super();

    this.local = local
    this.health = health
    this.entertainment = entertainment
    this.science = science
    this.technology = technology

    this.state = {
      current: local
    }
  }


  handleButton = event => {
    const { name } = event.target
    this.setState({ 
      current: this[name]
    })
  }

  searchStories = (term) => {
    let stories = [...local, ...health, ...technology, ...science, ...health]
    this.setState({
      current: (
        stories.filter(story => { 
          return story.headline.toLowerCase().includes(term.toLowerCase()) || 
          story.description.toLowerCase().includes(term.toLowerCase())
          }
        )
      )
    })
  }

  render () {
    return (
      <div className="app">
        <Menu handleButton={this.handleButton}/>
        <SearchForm searchStories={this.searchStories}/>
        <NewsContainer articles={this.state.current}/>
      </div>
    );
  }
}

export default App;
