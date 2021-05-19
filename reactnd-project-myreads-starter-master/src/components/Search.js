import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import Book from './Book'

export class Search extends Component {

  state={
    query: '',
  tempArray: [],
}

updateQuery = async (query) => {
  this.setState(() => ({
    query: query.trim()
}))
  const results = await search(query)
  console.log(this.state.tempArray);
  if(results === undefined){
    this.setState({tempArray:[]})
  }else {
    this.setState({tempArray:results})
  }
}

    render() {

      const { query } = this.state
      console.log(query);


        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                <button className="close-search" >Close</button>
                </Link>
             
              <div className="search-books-input-wrapper">
               
                <input type="text" placeholder="Search by title or author"
                 value={query} onChange={(event) => this.updateQuery(event.target.value)}/> 
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.tempArray.length > 0 && this.state.tempArray.map(book => <Book key={book.id} {...book} tempBook={this.state.tempArray} />)}
              </ol>
              
            </div>
          </div>
        )
    }
}


export default Search
