import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import Shelf from '../components/shelf'
import Book from '../components/book'


class Main extends React.Component {
	state = {
		books: []
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
                <Shelf name="Currently Reading" book=""/>
                <Shelf name="Want to Read" book=""/>
                <Shelf name="Read" book=""/>
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