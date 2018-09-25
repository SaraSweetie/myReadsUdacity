import React from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'

class Search extends React.Component {
	constructor(props) {
	      super(props);
	      this.state = {
	         query: ' '
	      };
	}
	
	render () {
		return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input value={this.state.query} onChange={e => this.updateSearch(e)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
		);
	}

	updateSearch(e) {
		console.log('search bar updated');
		this.setState({query: e.target.value})
	}
}

export default Search;