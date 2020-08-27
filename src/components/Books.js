import React, { Component } from 'react'
import BookItem from './BookItem'

export class Books extends Component {
	render() {
		return (
			<div className='cards'>
				{this.props.books.map((book) => (
					<BookItem
						key={book.id}
						book={book}
						deleteBook={this.props.deleteBook}
						changeRead={this.props.changeRead}
					/>
				))}
			</div>
		)
	}
}

export default Books
