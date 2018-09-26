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

	updateSearch(query) {
		console.log('search bar updated');
		this.setState({query: query}, this.searchBooks);
	}

	searchBooks () {
		console.log(this.state.query)
		search(this.state.query)
			.then( results => { 
  			console.log(results);
  			}).catch( error => {
  				console.log(`there was an ${error}`)
  			})
	}

	render () {
		return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input value={this.state.query} onChange={e => this.updateSearch(e.target.value)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
		);
	}
}

export default Search;