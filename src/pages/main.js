import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import Shelf from '../components/shelf'

class Main extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
	      	 books: []
	      	};
	}

  componentDidMount() {
    this.getBooks()
  }

	getBooks() {
		BooksAPI.getAll()
		.then(results => { 
			console.log(results);
			this.setState({ books : results})
		}).catch( error => {
  			console.log(`getBooks had an error: ${error}`)
  		});
	}

	updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(() => {
          book.shelf = shelf;
    		this.getBooks()
        }).catch( error => {
  			console.log(`updateShelf had an error: ${error}`)
  		});
  	}

	render () {
		return (
           <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf updateShelf={this.updateShelf} name="Currently Reading" books={this.state.books.filter( book => book.shelf === "currentlyReading")} />
                <Shelf updateShelf={this.updateShelf} name="Want to Read" books={this.state.books.filter( book => book.shelf === "wantToRead")} />
                <Shelf updateShelf={this.updateShelf} name="Read" books={this.state.books.filter( book => book.shelf === "read")} />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		);
	}
}

export default Main;