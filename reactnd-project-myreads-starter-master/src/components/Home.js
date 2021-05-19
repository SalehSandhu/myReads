import React, { Component } from 'react'
import Shelf from './Shelf'
import SearchButton from './SearchButton'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'



export class Home extends Component {

    state= {
        books: [],
        currentlyReading: [],
        wantToRead: [], 
        read: [], 
    
      }


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState(()=>({
            books
          }))

          this.setState(() => ({
            currentlyReading: books.filter(book => book.shelf === "currentlyReading")
          }))

          this.setState(() => ({
            wantToRead: books.filter(book => book.shelf === "wantToRead")
          }))
          
          this.setState(() => ({
            read: books.filter(book => book.shelf === "read")
          }))
        })
      }

    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <Shelf title='Currently Reading' book={this.state.currentlyReading} />
              <Shelf title='Want To Read' book={this.state.wantToRead} />
              <Shelf title='Read' book={this.state.read} />
              </div>
            </div>
            <Link to='/Search'>
            <SearchButton />
            </Link>
          </div>
        )
    }
}

export default Home
