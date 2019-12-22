import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.searchStories(this.state.search)
    this.setState({ search: ''})
  }

  render() {
    return (
      <header>
        <input 
          type="text"
          placeholder="Search articles"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />

        <button type="button" onClick={this.handleSubmit}>Search</button>
      </header>
    )
  }
}

export default SearchForm;