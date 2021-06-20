import React from 'react';


const ImageGallery = ({ images }) => {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL }) => (
                <li key={id} className="ImageGalleryItem">
                    <img src={webformatURL} alt='image' className="ImageGalleryItem-image"
                    ></img>
                </li>
            ))}
        </ul>
    )
}
export default ImageGallery