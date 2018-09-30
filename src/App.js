import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Search from './pages/search'

class BooksApp extends React.Component {
	constructor(props) {
        super(props);
            this.state = {
             books: []
            };
    }    

  render() {
    return(
    <div>
      <Route exact path="/" component={Main} updateShelf={this.props.updateShelf} />
      <Route exact path="/search" component={Search} />
    </div>
    );
  }
}

export default BooksApp