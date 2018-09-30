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
	        query: '',
          returnedBooks: []
	      };
	}

	updateSearch(query) {
		console.log('search bar updated');
		this.setState({query: query}, this.searchBooks(query));
	}

	searchBooks (query) {
		console.log(query)

		if(query.trim() ){
		BookAPI.search(this.state.query)
			.then( results => { 
				if(results.error || this.state.returnedBooks === undefined || this.state.returnedBooks === '' || this.state.query.length === 0) {
					this.setState({returnedBooks: [] });
					//There are no books for your search
				}else {
					this.setState({returnedBooks: results})
				}
  				
  				console.log(results)  
  				console.log(this.state.returnedBooks) 
  				console.log(this.state.query)

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
				        {this.state.returnedBooks.length > 0 ? this.state.returnedBooks.map( returnedBooks => 
                  <Book key={returnedBooks.id} book={returnedBooks} {...returnedBooks} updateShelf={this.props.updateShelf} />)
                  : (<p>No books match your seach.</p> ) 
            	  }
              </ol>
            </div>
          </div>
		);
	}
}

export default Search;