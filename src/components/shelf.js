import React from 'react'
import Book from '../components/book'

const Shelf = (props) => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            props.books.map( (book, key) =>
                            <Book updateShelf={props.updateShelf}
                                book={book}
                                key={book.id} />
                            )
                        }
                    </ol>
                  </div>
            </div>
        )
}

export default Shelf;