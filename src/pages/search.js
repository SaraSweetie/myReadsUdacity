import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/book'

class Search extends React.Component {
	constructor(props) {
	      super(props);
	      this.state = {
	      	books: [],
	      	returnedBooks: [],
	        query: ''
	      };
	}

	updateSearch(query) {
		this.setState({query: query}, this.searchBooks(query));
	}

	searchBooks(query) {
		BooksAPI.search(this.state.query) 
			.then( results => { 
				if(!results || query === '') {
 					this.setState({returnedBooks: [] });
					//There are no books for your search
				}else {
					this.setState({returnedBooks: results})
					//this.updateShelf();
				}
  				
  			}).catch( error => {
  				console.log(`there was an ${error}`)
  			})
	}

	getBooks() {
		BooksAPI.getAll()
		.then(results => { 
			console.log(results);
			this.setState({ returnedBooks : results})
		}).catch( error => {
  			console.log(`getBooks had an error: ${error}`)
  		});
	}

	updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
      }).catch( error => {
  			console.log(`updateShelf had an error: ${error}`)
  		});
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
				        {this.state.returnedBooks.length > 0 ? this.state.returnedBooks.map( books => 
                  <Book key={books.id} book={books} {...books} updateShelf={this.updateShelf} />)
                  : (<p>No books match your seach.</p> ) 
            	  }
              </ol>
            </div>
          </div>
		);
	}
}

export default Search;