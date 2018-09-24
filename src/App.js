import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Search from './pages/search'

class BooksApp extends React.Component {
  render() {
    return(
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
    </div>
    );
  }
}

export default BooksApp