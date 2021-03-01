import React from 'react';
import { SongResultType } from '../store/types';
import LazyLoadElement from './presentation/LazyLoadElement';
import styles from './SearchItem.module.scss';

const SearchItem = ({ item }: SearchItemProps): React.ReactElement => {
    const songWriters = item.song_writers.join(', ');
    const renderItem = !item.error;

    return (
        <div className={styles.root}>
            {renderItem &&
                <div>
                    <div className={styles.contentHeader}>
                        <div className={styles.contentImage}>
                            <LazyLoadElement> 
                                {() => <img src={item.song_image_url} alt="Song Art" />}
                            </LazyLoadElement>
                        </div> 
                        <div className={styles.contentMain}>
                            <h2>{item.song_title}</h2>
                            <p>Writters: <strong>{songWriters}</strong></p>
                            <p>Artist: <strong>{item.artist_name}</strong></p>
                            <p>Album: <strong>{item.album_name}</strong></p>
                        </div>
                    </div>
                    <div className={styles.contentLyrics}>
                        <h3>Lyrics</h3>
                        <p dangerouslySetInnerHTML={ {__html: item.lyrics} }></p>
                    </div>
                </div>
            }
            {!renderItem && <h2>Song data not found</h2>}
        </div>
    );
};

type SearchItemProps = {
    readonly item: SongResultType;
}

export default SearchItem;
