import React from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
             books: [],
             Book: [],
             shelf: ''
            };
    } 

    componentDidMount() {
        console.log(this);
    }

    updateShelf = (e) => {
        Book = this.props.book;
        BooksAPI.update(Book, e.target.value).then(() => {
                this.setState(state => ({books: state.book
                .filter(b => b.id !== Book )
                .concat(Book)}))
                }
                )
            };



/*

        console.log(`Change shelf to ${e.target.value}`);
        //this.setState({value: e.target.value});
        //this setp isn't working...?? returns [object, Object]
        BooksAPI.update(this.props.book, e.target.value)
            .then( results => {
                BooksAPI.getAll().then((books) => {
                 this.updateShelf()
              })


                //shelf = e.target.value;
                //this.setState({setState: e.target.value});
                //this setp isn't working...?? returns null
                console.log(`book changed to ${results}`)
                //this setp isn't working...?? returns [object, Object]
            }).catch( error => {
                console.log(`there was an ${error} when changing shelf`)
            });
    }*/

    render () {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")` || `(url("../images/noCover.jpg")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.updateShelf} value={this.props.book.shelf || "none"}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
		);
	}
}

export default Book;