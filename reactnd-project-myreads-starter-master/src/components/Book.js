import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {update} from '../BooksAPI'

export class Book extends Component {

    onHandle = (event) => {
        update(this.props,event)
        console.log(event);       
   
    }

    refreshPage() {
        window.location.reload(false);
      }
      

    render() {
        
        return (
            
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
               backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})`}}> </div>
              
              <div className="book-shelf-changer" >
                <select onChange={(event) => this.onHandle(event.target.value)} value={this.props.shelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
           
          </div>
      
        )
    }
}


Book.propTypes = {
    
    

}


export default Book
