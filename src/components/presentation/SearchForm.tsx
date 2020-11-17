import React from 'react';
import { useDispatch } from 'react-redux';
import { getArtists, clearArtists } from '../../store/actions';
import Input from './Input';
import Button from './Button';
import styles from './SearchForm.module.scss';

const SearchForm = (): React.ReactElement => {
    const dispatch = useDispatch();
    const searchRef = React.useRef<HTMLInputElement>(null);
    const [searchState, setSearchState] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchState(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(clearArtists());
        if (searchRef.current) dispatch(getArtists(searchRef.current.value));
    };

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit}>
                <Input
                    type="search"
                    value={searchState}
                    handleChange={handleChange}
                    ref={searchRef} />
                <Button value="Search" />
            </form>
        </div>
    );
};

export default SearchForm;
