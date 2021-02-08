import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const searchQueryParameter = match && match.params && match.params.query;
    const songIdParameter = match && match.params && match.params.id;

    const dispatch = useDispatch();
    const song = useSelector((state: RootState) => state.song);
    const searchQuery = useSelector((state: RootState) => state.query);
    const { results: searchResults } = useSelector(
        (state: RootState) => state.songSearchResults,
        shallowEqual
    );

    const renderResultList = searchQueryParameter && searchResults.length > 0;
    const renderSearchItem = songIdParameter && song.id > 0;

    React.useEffect(() => {
        if (songIdParameter) dispatch(getSong({ query: songIdParameter }));
    }, [dispatch, songIdParameter]);

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
                    <section className={styles.searchForm}>
                        <SearchForm searchHandler={searchHandler} />
                    </section>
                    {renderResultList &&
                        <section className={styles.searchList}>
                            <SearchResultList list={searchResults} />
                        </section>
                    }
                    {renderSearchItem &&
                        <div>
                            <nav className={styles.breadcrumb}>
                                <Link to={`/search/${searchQuery}`}>
                                    Search Results
                                </Link>
                                    &nbsp;&nbsp;&gt;&nbsp;&nbsp;{song.song_title}
                            </nav>
                            <section className={styles.searchItem}>
                                <SearchItem item={song} />
                            </section>
                        </div>
                    }
                </div>
            </article>
        </MasterTemplate>
    );
};

type SearchPageParams = {
    id?: string;
    query?: string;
};

type SearchPageProps = {
    match: match<SearchPageParams>;
    history: any;
}

export default SearchPage;
