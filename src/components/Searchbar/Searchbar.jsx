import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export const Searchbar = ({onSubmit}) => {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangePicture = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
           return toast.warn('Enter a query');
        }

        onSubmit(searchQuery);
        setSearchQuery('');
    }

        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormLabel}>Search</span>
                        <AiOutlineSearch />
                    </button>

                    <input
                        onChange={handleChangePicture}
                        className={css.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}