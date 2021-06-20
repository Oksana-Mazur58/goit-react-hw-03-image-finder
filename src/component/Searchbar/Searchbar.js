import React, { Component } from 'react';
import axios from 'axios';

class Searchbar extends Component {
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
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        )
    }
}
export default Searchbar

