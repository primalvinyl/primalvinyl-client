import React from 'react';
import { useDispatch } from 'react-redux';
import { getArtists, clearArtists } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchRef = React.useRef<HTMLInputElement>(null);
    const [searchState, setSearchState] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchState(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(clearArtists());
        if (searchRef.current) dispatch(getArtists(searchRef.current.value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={searchState}
                handleChange={handleChange}
                ref={searchRef} />
            <Button value="Search" />
        </form>
    );
};

export default SearchForm;
