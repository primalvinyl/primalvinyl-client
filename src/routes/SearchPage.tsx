import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getSongSearch,
    clearSongSearch,
    getSong,
    clearSong
} from '../store/actions';
import { RootState } from '../store/reducers';
import MasterTemplate from '../components/_MasterTemplate';
import ProgressBar from '../components/presentation/ProgressBar';
import BreadCrumbs from '../components/presentation/BreadCrumbs';
import SearchForm from '../components/SearchForm';
import SearchResultList from '../components/SearchResultList';
import SearchItem from '../components/SearchItem';
import { match } from 'react-router';
import styles from './SearchPage.module.scss';

const SearchPage = ({ match, history }: SearchPageProps): React.ReactElement => {
    const searchQueryParameter = match && match.params && match.params.query;
    const songIdParameter = match && match.params && match.params.id;

    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.query);
    const songResult = useSelector((state: RootState) => state.song);
    const searchResults = useSelector((state: RootState) => state.songSearchResults);

    const renderSearchList =
        searchQueryParameter &&
        (searchResults.request_status === 'resolved');
    const renderSearchItem =
        songIdParameter &&
        (songResult.request_status === 'resolved');
    const renderProgressBar =
        songResult.request_status === 'pending' ||
        searchResults.request_status === 'pending';

    //get data on page load when appropriate
    React.useEffect(() => {
        //get song if song id parameter
        if (songIdParameter) {
            dispatch(getSong({ query: songIdParameter }));
        }
        //get song search list if query parameter and no results already exist
        else if (searchQueryParameter && searchResults.results.length === 0) {
            dispatch(getSongSearch({ query: searchQueryParameter }));
        }
    }, [dispatch, songIdParameter, searchQueryParameter, searchResults]);

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
                        <SearchForm searchHandler={searchHandler} searchField={searchQueryParameter} />
                    </section>
                    {renderProgressBar &&
                        <section className={styles.progressIndicator}>
                            <ProgressBar color="#adb5bd" />
                        </section>
                    }
                    {renderSearchList &&
                        <section className={styles.searchList}>
                            <SearchResultList searchResults={searchResults} />
                        </section>
                    }
                    {renderSearchItem &&
                        <section className={styles.searchItem}>
                            <SearchItem item={songResult} />
                        </section>
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
