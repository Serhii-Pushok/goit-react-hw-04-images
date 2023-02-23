import { useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "../Modal/Modal";
import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

        return  <li className={css.imageGalleryItem} >
                    <img src={webformatURL} alt={tags} className={css.imageGalleryItem__image} onClick={openModal} />
                    {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={closeModal} />}
                </li> 
    }


ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
}
