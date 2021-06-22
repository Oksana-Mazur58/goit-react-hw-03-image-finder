import React from 'react';
import PropTypes from 'prop-types';


const ImageGallery = ({ images, onOpenModal }) => {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, tags, largeImageURL}) => (
                <li key={id} className="ImageGalleryItem" onClick={()=>{onOpenModal(largeImageURL, tags)}}>
                    <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} ></img>
                     
                </li>
            ))}
        </ul>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired
}
export default ImageGallery