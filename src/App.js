import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Search from './pages/search'
import NotFound from './pages/NotFound'

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
      <Route exact path="/NotFound" component={NotFound} />
    </div>
    );
  }
}

export default BooksApp