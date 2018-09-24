import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import Shelf from '../components/shelf'


class Main extends React.Component {
	state = {
		books: [],
	}

	componentDidMount() {
		BooksAPI.getAll()
		.then(books => { 
			console.log(books);
			this.setState({books})
		})
	}

	render () {
		return (
           <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf name="Currently Reading" book={this.state.books.filter( book => book.shelf === "currentlyReading")} />
                <Shelf name="Want to Read" book={this.state.books.filter( book => book.shelf === "wantToRead")} />
                <Shelf name="Books I Read" book={this.state.books.filter( book => book.shelf === "read")} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		);
	}
}

export default Main;