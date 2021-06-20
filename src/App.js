import React, { Component } from 'react';

import './index.css'
import Modal from './component/Modal'
import ImageGallery from './component/ImageGallery'
import Searchbar from './component/Searchbar'
// import Loader from './component/Loader'
import Button from './component/Button'
import newsApi from './services/news-api'
import Loader from "react-loader-spinner";




// axios.defaults.headers.common['Authorization'] = 'Bearer 21326628-9a70d89bbf799e4753ffadf9e'

//Key 21326628-9a70d89bbf799e4753ffadf9e

class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
         this.fetchImages()   
        }
    }

    onChangeQuery = (query) => {
        this.setState({
            searchQuery: query,
            currentPage: 1,
            images: [],
            error: null,
        })
    }

    fetchImages = () => {
        const { currentPage, searchQuery, } = this.state;
        const options = {
            currentPage,
            searchQuery,
        }
        this.setState({isLoading:true})
       newsApi.fetchImages(options).then(response => {
                this.setState(prevState => ({
                    images:[...prevState.images, ...response.data.hits],
                    currentPage: prevState.currentPage + 1,

                }))
       }).catch(error=>this.setState({error}))
           .finally(() => this.setState({ isLoading: false }))
    }
    render() {
        const { images, isLoading, error} = this.state
        return (
            <div>
                {error &&alert("Something went wrong. Try again!")}
                <Searchbar onSubmit={this.onChangeQuery} />
                {isLoading &&  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}
                <ImageGallery images={images} />
           
                {images.length>0 &&(<Button onClick={this.fetchImages} />)}
            </div>
        )
    }
}

export default App;
