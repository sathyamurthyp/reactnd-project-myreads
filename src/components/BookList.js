import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


const BookList = (props) => {
  const { bookList, onChangeShelf } = props
  return (
    <ol className="books-grid">
      {bookList.map((book) => {
        return (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf}/>
          </li>
        )
      })}
    </ol>
  )
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookList
