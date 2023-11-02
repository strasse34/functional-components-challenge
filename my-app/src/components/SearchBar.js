import React, { Component } from 'react'
import importedNames from './names.js'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found: {this.state.names.length}</p>
        <form>
            <input placeholder='search names' />
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names.map((name) => {
                return <p key={name}>{name}</p>
            })}
            
        </div>
      </div>
    )
  }
}

export default SearchBar