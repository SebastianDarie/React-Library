import React from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Books from './components/Books'

import './App.css'

class App extends React.Component {
	state = {
		books: JSON.parse(localStorage.getItem('books')),
	}

	componentDidMount() {
		this.checkLocal()
	}

	addBook = (title, author, pages, read, id) => {
		let book = new Book(title, author, pages, read, id)

		if (this.inLibrary(book)) return

		this.setState({ books: [...this.state.books, book] })
	}

	deleteBook = (id) => {
		this.setState({
			books: [...this.state.books.filter((book) => book.id !== id)],
		})
	}

	changeRead = (id) => {
		this.setState({
			books: this.state.books.map((book) => {
				if (book.id === id) {
					book.read = !book.read
				}
				return book
			}),
		})
	}

	inLibrary = (book) => {
		// eslint-disable-next-line array-callback-return
		return this.state.books.some((item) => {
			if (item.title === book.title && item.author === book.author)
				return true
		})
	}

	saveToLocal = () => {
		localStorage.setItem('books', JSON.stringify(this.state.books))
	}

	checkLocal = () => {
		let localBooks = JSON.parse(localStorage.getItem('books'))

		if (
			localBooks === null ||
			localBooks === undefined ||
			localBooks.length === 0
		) {
			this.addBook(
				'The Great Gatsby',
				'F. Scott Fitzgerald',
				218,
				false,
				Date.now().toString()
			)
		}
	}

	render() {
		this.saveToLocal()
		return (
			<div>
				<Header />
				<Modal addBook={this.addBook} />
				<Books
					books={this.state.books}
					deleteBook={this.deleteBook}
					changeRead={this.changeRead}
				/>
			</div>
		)
	}
}

function Book(title, author, pages, read, id) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.id = id
}

export default App
