import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
    getSongSearch,
    clearSongSearch,
    getSong,
    clearSong
} from '../store/actions';
import MasterTemplate from '../components/_MasterTemplate';
import ProgressBar from '../components/presentation/ProgressBar';
import SearchForm from '../components/SearchForm';
import SearchResultList from '../components/SearchResultList';
import SearchItem from '../components/SearchItem';
import { match } from 'react-router';
import styles from './SearchPage.module.scss';

const SearchPage = ({ match, history }: SearchPageProps): React.ReactElement => {
    const searchQueryParameter = match && match.params && match.params.query;
    const songIdParameter = match && match.params && match.params.id;

    const dispatch = useDispatch();
    const songResult = useSelector((state: RootStateOrAny) => state.song);
    const searchResults = useSelector((state: RootStateOrAny) => state.songSearchResults);

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
        //get song data if song id parameter
        if (songIdParameter) {
            dispatch(getSong({ query: songIdParameter }));
        }
        //get song search list data if query parameter and no results already exist
        else if (searchQueryParameter && searchResults.results.length === 0) {
            dispatch(getSongSearch({ query: searchQueryParameter }));
        }
    }, [dispatch, songIdParameter, searchQueryParameter, searchResults]);

    const searchSubmitHandler = (query: string) => {
        history.push(`/search/${query}`);
        dispatch(clearSongSearch());
        dispatch(clearSong());
        dispatch(getSongSearch({ query }));
    };
 
    return (
        <MasterTemplate>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.searchForm}>
                        <SearchForm
                            searchSubmitHandler={searchSubmitHandler}
                            searchField={searchQueryParameter} />
                    </div>
                    {renderProgressBar &&
                        <div className={styles.progressIndicator}>
                            <ProgressBar color="#adb5bd" />
                        </div>
                    }
                    {renderSearchList &&
                        <div className={styles.searchList}>
                            <SearchResultList searchResults={searchResults} />
                        </div>
                    }
                    {renderSearchItem &&
                        <div className={styles.searchItem}>
                            <SearchItem item={songResult} />
                        </div>
                    }
                </div>
            </div>
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
