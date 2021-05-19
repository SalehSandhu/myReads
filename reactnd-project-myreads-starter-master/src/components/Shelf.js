import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

export class Shelf extends Component {
    render() {
        console.log(this.props.book);
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.book && this.props.book.map(books => <Book key={books.id}{...books} onHandle={this.props.onHandle} />)}
              </ol>
            </div>
          </div>
        )
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    book: PropTypes.array.isRequired,
       

}

export default Shelf

