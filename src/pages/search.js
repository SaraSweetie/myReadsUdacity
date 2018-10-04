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

	componentDidMount(){
    	this.getBooks();
  	}

  	getBooks() {
		BooksAPI.getAll()
		.then(results => { 
			this.setState({ books : results})
		}).catch( error => {
  			console.log(`getBooks had an error: ${error}`)
  		});
	}

	updateSearch(query) {
		this.setState({query: query}, this.searchBooks(query));
	}

	searchBooks(query) {
		BooksAPI.search(this.state.query.trim()) 
			.then( results => { 
				if(!results || query === '' || results.error ) {
 					this.setState({returnedBooks: [] });
 					//no books retruned
				}else {
					results.forEach( b => {
						let findShelf = this.state.books.filter(
							book => book.id === b.id);
							if(findShelf[0]) { b.shelf = findShelf[0].shelf;
							}
					});
					return this.setState({returnedBooks: results})
				}
  			}).catch( error => {
  				console.log(`there was an ${error}`)
  				console.log(this.state.query);
  			})
	}

	updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((results) => {
      	book.shelf = shelf;
      	this.setState(state => ({
        		books: state.books.filter(b => b.id !== book.id).concat([book])
        	}) );
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
				        {this.state.returnedBooks.length > 0 ? this.state.returnedBooks.map( books => {
				        	return <Book key={books.id} book={books} {...books} updateShelf={this.updateShelf} />
				        }
                  )
                  : (<p>No books match your seach.</p> ) 
            	  }
              </ol>
            </div>
          </div>
		);
	}
}

export default Search;