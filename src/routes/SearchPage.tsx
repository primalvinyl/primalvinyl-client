import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
    getSongSearch,
    clearSongSearch,
    getSong,
    clearSong
} from '../store/actions';
import { RootState } from '../store/reducers';
import MasterTemplate from '../components/presentation/_MasterTemplate';
import SearchForm from '../components/SearchForm';
import SearchResultList from '../components/SearchResultList';
import SearchItem from '../components/SearchItem';
import { match } from 'react-router';
import styles from './SearchPage.module.scss';

const SearchPage = ({ match, history }: SearchPageProps): React.ReactElement => {
    const dispatch = useDispatch();
    const id = match && match.params && match.params.id;
    const song = useSelector((state: RootState) => state.song);
    const { results } = useSelector((state: RootState) => state.songSearchResults, shallowEqual);
    const renderResultList = song.id === 0 && results.length > 0;
    const renderSearchItem = song.id > 0;

    React.useEffect(() => {
        if (id) dispatch(getSong({ query: id }));
    }, [dispatch, id]);

    const searchHandler = (query: string) => {
        history.push(`/search/${query}`);
        dispatch(clearSongSearch());
        dispatch(clearSong());
        dispatch(getSongSearch({ query }));
    };

    return (
        <MasterTemplate>
            <article className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.searchForm}>
                        <SearchForm searchHandler={searchHandler} />
                    </div>
                    {renderResultList &&
                        <div className={styles.searchList}>
                            <SearchResultList list={results} />
                        </div>
                    }
                    {renderSearchItem &&
                        <div className={styles.searchItem}>
                            <SearchItem item={song} />
                        </div>
                    }
                </div>
            </article>
        </MasterTemplate>
    );
};

type SearchPageParams = {
    id: string;
};

type SearchPageProps = {
    match: match<SearchPageParams>;
    history: any;
}

export default SearchPage;
