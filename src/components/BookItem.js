import React, { Component } from 'react'

export class BookItem extends Component {
	render() {
		const { title, author, pages, read, id } = this.props.book
		return (
			<div className='card'>
				<header>
					<h2>{title}</h2>
				</header>
				<h4>by {author}</h4>
				<p> Number of Pages: {pages} </p>
				<div className='custom-switch'>
					<input
						type='checkbox'
						className='toggle'
						defaultChecked={read}
						onClick={this.props.changeRead.bind(this, id)}
					/>
					<label className='read-label' htmlFor='read'>
						I have read this book
					</label>
				</div>
				<span
					className='delete'
					onClick={this.props.deleteBook.bind(this, id)}>
					<i className='fas fa-trash'></i>
				</span>
			</div>
		)
	}
}

export default BookItem
