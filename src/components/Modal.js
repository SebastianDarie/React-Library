import React from 'react'
import ModalForm from './ModalForm'

class Modal extends React.Component {
	openModal = (e) => {
		e.target.parentNode.childNodes[1].style.display = 'block'
	}

	closeModal = (e) => {
		e.target.parentNode.parentNode.parentNode.style.display = 'none'
	}

	render() {
		return (
			<div className='add-book'>
				<button
					id='modal-btn'
					className='button'
					onClick={this.openModal}>
					New Book
				</button>

				<div id='my-modal' className='modal'>
					<div className='modal-content'>
						<div className='modal-header'>
							<span onClick={this.closeModal} className='close'>
								&times;
							</span>
							<h2>Add a Book</h2>
						</div>

						<div className='modal-body'>
							<ModalForm addBook={this.props.addBook} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal
