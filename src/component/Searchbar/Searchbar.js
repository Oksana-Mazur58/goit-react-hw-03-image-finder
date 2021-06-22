import React, { Component } from 'react';
import axios from 'axios';
 import PropTypes from 'prop-types';

class Searchbar extends Component {
     static = {
        onSubmit: PropTypes.func.isRequired
    }
   
    state = {
        query: ''
    }
    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({ query: '' })
    }
    render() {
        const { query } = this.state
        return (<header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        )
    }
}
export default Searchbar

