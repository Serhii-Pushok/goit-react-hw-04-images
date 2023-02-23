import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({images}) => {
    return <ul className={css.imageGallery}>
                {images.length > 0 && images.map(image => (
                    <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} tags={image.tags} largeImageURL={image.largeImageURL} />
                ))}
            </ul>
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
    }))
}

