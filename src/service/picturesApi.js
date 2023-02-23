import axios from 'axios';

export const fetchPhoto = async (searchQuery, page) => {
            const {data} = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=31594853-2af2c4fff94d4bdce2676b077&image_type=photo&orientation=horizontal&per_page=12`);
                
            return data;
    }