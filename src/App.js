import React from 'react'
import Header from './components/Header'
import Modal from './components/Modal'

import './App.css'

class App extends React.Component {
	state = {
		library: [],
	}

	Book = (title, author, pages, read) => {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
	}

	addBook(title, author, pages, read) {
		console.log(title, author, pages, read)
	}

	render() {
		return (
			<div>
				<Header />
				<Modal addBook={this.addBook} />
			</div>
		)
	}
}

export default App
