import React from 'react'

const Header = () => {
	return (
		<div>
			<div>
				<img src='../img/books.png' alt='books'></img>
			</div>
			<h1>My Library</h1>

			<div className='add-book'>
				<button id='modal-btn' className='button'>
					New Book
				</button>
			</div>
		</div>
	)
}

export default Header
