import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component{
     static = {
        onCloseModal: PropTypes.func.isRequired
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown) 
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === "Escape") {
                this.props.onCloseModal();
           } 
    }
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onCloseModal()
        }
    }


    render() {
        return (
        <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
        {this.props.children}
        </div>
        </div>
    )
}
}
export default Modal