import React from 'react'
import Book from '../components/book'

class Shelf extends React.Component {
	componentDidMount() {
		console.log(this);
	}
	render () {
		return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{
                    		this.props.books.map( (book, key) => <Book book={book} key={key.id} />)
                    	}
                    </ol>
                  </div>
            </div>
            )
	}
}

export default Shelf;