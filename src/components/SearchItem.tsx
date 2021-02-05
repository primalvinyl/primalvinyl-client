import React from 'react';
import { SongResultType } from '../store/types';
import styles from './SearchItem.module.scss';

const SearchItem = ({ item }: SearchItemProps): React.ReactElement => {
    const songWriters = item.song_writers.join(', ');

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.contentHeader}>
                    <div className={styles.contentImage}>
                        <img src={item.song_image_url} alt="" />
                    </div>
                    <div className={styles.contentMain}>
                        <h2>{item.song_title}</h2>
                        <p>Written by: <strong>{songWriters}</strong></p>
                        <p>Performed by: <strong>{item.artist_name}</strong></p>
                        <p>Album: <strong>{item.album_name}</strong></p>
                    </div>
                </div>
                <div className={styles.contentLyrics}>
                    <h3>Lyrics</h3>
                    <p dangerouslySetInnerHTML={ {__html: item.lyrics} }></p>
                </div>
            </div>
        </div>
    );
};

type SearchItemProps = {
    readonly item: SongResultType;
}

export default SearchItem;
