import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../api/BooksAPI'
import BookList from './BookList.js'


const cleanResults = (books) => {
  let checkDict = {}
  let newBooks = []
  for (let book of books) {
    if (!checkDict[book.id]) {
      newBooks.push(book)
      checkDict[book.id] = true
    }
  }
  return newBooks
}

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchBooks: []
  }

  upadteQuery = (query) => {
    this.setState({ query: query })
  }
 

  onSearchBook = (query, myLibrary) => {
    this.upadteQuery(query)
    if (this.state.query !== '') {
      BooksAPI.search(this.state.query).then(books => {
        if (books && books.length > 0) {
          // if search return results
          for (let resultBook of books) {
            let exist = false
            for (let myBook of myLibrary) {
              if (myBook.id === resultBook.id) {
                exist = true
                resultBook.shelf = myBook.shelf
              }
            }
            if (!exist) {
              resultBook.shelf = "none"
            }
          }
          // remove the non exist books and remove duplicated search results
          this.setState({
            searchBooks: cleanResults(books)
          })
        } else {
          // either undefined or error message
          this.setState({ searchBooks: [] })
        }
      })
    } else {
      this.setState({ searchBooks: [] })
    }
  }

  render() {
    const { books, onChangeShelf } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.onSearchBook(e.target.value, books)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            bookList={this.state.searchBooks}
            onChangeShelf={onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooks
