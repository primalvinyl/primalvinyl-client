import React from 'react';
import MasterTemplate from '../components/presentation/_MasterTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { getSong } from '../store/actions';
import styles from './SongResult.module.scss';
import { match } from 'react-router';

const SongResults = ({ match }: SongResultsProps): React.ReactElement => {
    const dispatch = useDispatch();
    const song = useSelector((state: RootState) => state.song);
    const id = match && match.params && match.params.id;

    React.useEffect(() => {
        dispatch(getSong({ query: id }));
    }, [dispatch, id]);

    const songWriters = song.song_writers.join(', ');

    return (
        <MasterTemplate>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.contentHeader}>
                        <div className={styles.contentImage}>
                            <img src={song.song_image_url} alt="" />
                        </div>
                        <div className={styles.contentMain}>
                            <h2>{song.song_title}</h2>
                            <p>Written by: <strong>{songWriters}</strong></p>
                            <p>Performed by: <strong>{song.artist_name}</strong></p>
                            <p>Album: <strong>{song.album_name}</strong></p>
                        </div>
                    </div>
                    <div className={styles.contentLyrics}>
                        <h3>Lyrics</h3>
                        <p dangerouslySetInnerHTML={ {__html: song.lyrics} }></p>
                    </div>
                </div>
            </div>
        </MasterTemplate>
    );
};

type SongResultsParams = {
    id: string;
};

type SongResultsProps = {
    match: match<SongResultsParams>
}

export default SongResults;
