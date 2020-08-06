import React, { Component } from 'react'
import SearchResult from './components/SearchResult';

export default class App extends Component {
  render() {
    return (
      <div style={{background:'#444'}}>
          <SearchResult/>          
      </div>
    )
  }
}
