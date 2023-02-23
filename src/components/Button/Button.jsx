import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({onLoadMoreButton, children}) => {
    return <button type="submit" className={css.button} onClick={onLoadMoreButton}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.string,
    onLoadMoreButton: PropTypes.func.isRequired,
}