import React from 'react'
import { Route } from 'react-router-dom'
import '../css/App.css'
import SearchBooks from './SearchBooks.js'
import BookShelf from './BookShelf.js'
import * as BooksAPI from '../api/BooksAPI'
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books => {
      this.setState({ books: books })
    }))
  }

  onChangeShelf = (book, BookShelf) => {
    book.BookShelf = BookShelf
    BooksAPI.update(book, BookShelf).then(() => {
      BooksAPI.getAll().then( books => {
        this.setState({ books: books })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            onChangeShelf={this.onChangeShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onChangeShelf={this.onChangeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
