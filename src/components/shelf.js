import React from 'react'
import Book from '../components/book'

const Shelf = ({name, books, updateShelf}) => {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map( (book, key) =>
                            <Book updateShelf={updateShelf}
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