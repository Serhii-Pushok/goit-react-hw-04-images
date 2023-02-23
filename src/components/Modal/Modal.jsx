import { useEffect } from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ largeImageURL, tags, onClose }) => {

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        }
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose])

    const handleBackDropClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

        return createPortal (<div className={css.overlay} onClick={handleBackDropClick}>
                <div className={css.modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>, modalRoot)
    }


Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

