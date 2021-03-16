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
                    <div className={styles.headerRoot}>
                        <div className={styles.headerWrapper}>
                            <div className={styles.headerImage}>
                                <LazyLoadElement> 
                                    {(onload: any) => 
                                        <img
                                            src={item.song_image_url}
                                            alt="Song Art"
                                            onLoad={onload}
                                        />
                                    }
                                </LazyLoadElement>
                            </div>
                            <div className={styles.headerMain}>
                                <h2>{item.song_title}</h2>
                                <div className={styles.headerDetails}>
                                    <p>
                                        <span>Artist</span>
                                        <strong>{item.artist_name}</strong>
                                    </p>
                                    <p>
                                        <span>Written by</span>
                                        <strong>{songWriters}</strong>
                                    </p>
                                    <p>
                                        <span>Album</span>
                                        <strong>{item.album_name}</strong>
                                    </p>
                                    <p><span>Released</span>
                                    <strong>{item.song_release_date}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentRoot}>
                        <div className={styles.contentWrapper}>
                            <h3>Lyrics</h3>
                            <p dangerouslySetInnerHTML={ {__html: item.lyrics} }></p>
                        </div>
                    </div>
                </div>
            }
            {!renderItem && <h2 className={styles.itemError}>Song data not found</h2>}
        </div>
    );
};

type SearchItemProps = {
    readonly item: SongResultType;
}

export default SearchItem;
