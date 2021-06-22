import React, { Component } from 'react';

import './index.css'
import Modal from './component/Modal'
import ImageGallery from './component/ImageGallery'
import Searchbar from './component/Searchbar'
import Spinner from './component/Loader'
import Button from './component/Button'
import newsApi from './services/news-api'





// axios.defaults.headers.common['Authorization'] = 'Bearer 21326628-9a70d89bbf799e4753ffadf9e'

//Key 21326628-9a70d89bbf799e4753ffadf9e

class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null,
        showModal: false,
        modalImage: '',
        modalAlt:'',
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
           this.scrollWindow();
       }).catch(error=>this.setState({error}))
           .finally(() => this.setState({ isLoading: false }))
    }
    scrollWindow() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }
     openModal = (url, alt) => {
        this.setState(({showModal})=>({
            showModal: !showModal,
            modalImage: url,
            modalAlt: alt
        }))
     }
     closeModal = () => {
        this.setState(({showModal})=>({
            showModal: !showModal,
            modalImage: '',
            modalAlt: '',
        }))
    }
    render() {
        const { images, isLoading, error, showModal, modalImage, modalAlt} = this.state
        return (
            <div>
                {showModal && <Modal onCloseModal={this.closeModal}>
                    <img className="modalImg" src={modalImage} alt={modalAlt} />
                </Modal>}
                {error && alert("Something went wrong. Try again!")}
                <Searchbar onSubmit={this.onChangeQuery} />
                {isLoading &&  <Spinner/>}
                <ImageGallery images={images}
                    onOpenModal={this.openModal}/>
           
                {images.length>0 &&(<Button onClick={this.fetchImages} />)}
            </div>
        )
    }
}

export default App;
