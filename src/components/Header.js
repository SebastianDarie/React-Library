import React from 'react'
import books from '../img/books.png'

const Header = () => {
	return (
		<div className='center-book'>
			<div>
				<img src={books} alt='books'></img>
			</div>
			<h1>My Library</h1>
		</div>
	)
}

export default Header
