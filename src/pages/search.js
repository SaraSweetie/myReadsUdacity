import React from 'react'
import {Link} from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import Book from '../components/book'
import updateShelf from './main'


class Search extends React.Component {
	constructor(props) {
	      super(props);
	      this.state = {
	      	books: [],
	        query: ''
	      };
	}

	updateSearch(query) {
		console.log('search bar updated');
		this.setState({query: query}, this.searchBooks(query));
	}

	searchBooks(query) {
		console.log(query)
		console.log(this.state.query)

		if(query.trim() ){
		BookAPI.search(this.state.query)
			.then( results => { 
				if(results.error || this.state.books === undefined || this.state.books === '' || this.state.query.length === 0) {
					this.setState({books: [] });
					//There are no books for your search
				}else {
					this.setState({books: results})
				}
  				
  			}).catch( error => {
  				console.log(`there was an ${error}`)
  			})
  		}
	}

	render () {
		return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input value={this.state.query} onChange={(e) => this.updateSearch(e.target.value)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				        {this.state.books.length > 0 ? this.state.books.map( books => 
                  <Book key={books.id} book={books} {...books} updateShelf={this.props.updateShelf} />)
                  : (<p>No books match your seach.</p> ) 
            	  }
              </ol>
            </div>
          </div>
		);
	}
}

export default Search;