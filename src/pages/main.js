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
		BooksAPI.getAll()
		.then(results => { 
			console.log(results);
			this.setState({ books : results})
		}).catch( error => {
  			console.log(`there was an ${error}`)
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
                <Shelf name="Currently Reading" books={this.state.books.filter( book => book.shelf === "currentlyReading")} />
                <Shelf name="Want to Read" books={this.state.books.filter( book => book.shelf === "wantToRead")} />
                <Shelf name="Books I Read" books={this.state.books.filter( book => book.shelf === "read")} />
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