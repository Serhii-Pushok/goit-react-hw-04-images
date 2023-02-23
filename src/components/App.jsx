import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchPhoto } from "service/picturesApi";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from './Loader/Loader';
import { Button } from "./Button/Button";
import css from './App.module.css'


export const App = () => {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [isVissible, setIsVissible] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    getPictures();
  }, [query, page])

  const getPictures = async () => {
    setIsLoading(true);

    try {
      const { hits, totalHits } = await fetchPhoto(query, page)
      
      if (hits.length === 0) {
        setIsVissible(false)
        return toast.error("Sorry, there are no images matching your search query. Please try again.");
      };

      if (page > Math.ceil(totalHits / perPage)) {
        setIsVissible(false)
        return toast.warn("We're sorry, but you've reached the end of search results.");
      };

      setImages([...images, ...hits]);
      setIsVissible(page < Math.ceil(totalHits / perPage))
  
    } catch (error) {
      setError(error.message);
      
    }
    finally {
        setIsLoading(false)
      }
  }

  const handleFormSubmit = picture => {
    setQuery(picture);
    setImages([]);
    setPage(1);
    setError(false);
  }

  const loadMoreButton = () => {
    setPage(prevState => (prevState + 1))
  }

      return (
        <div className={css.container}>
                      
            <Searchbar onSubmit={handleFormSubmit} />
          
            {isLoading && <Loader />}

            <ImageGallery images={images} />
          
            {isVissible && (<Button disabled={isLoading} onLoadMoreButton={loadMoreButton}>
              {isLoading ? 'Loading...' : 'Load more'}
            </Button>)}
          
            <ToastContainer autoClose={3000}/>
          </div>
          );
};
