import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
    return  axios.get(`https://pixabay.com/api/?key=21326628-9a70d89bbf799e4753ffadf9e&image_type=photo&orientation=horizontal
        &q=${searchQuery}&per_page=12&page=${currentPage}`)
  
}
export default { fetchImages }