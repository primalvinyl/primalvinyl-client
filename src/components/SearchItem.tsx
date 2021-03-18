import React from 'react';
import { SongResultType } from '../store/types';
import LazyLoadElement from './presentation/LazyLoadElement';
import styles from './SearchItem.module.scss';

const SearchItem = ({ item }: SearchItemProps): React.ReactElement => {
    const songWriters = item.song_writers.join(', ');
    const renderItem = !item.error;
    const spotifyId = item.media_spotify_track_id;
    const soundcloudId = item.media_soundcloud_track_id;

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
                            <div>
                                <h3>Lyrics</h3>
                                <p dangerouslySetInnerHTML={ {__html: item.lyrics} }></p>
                            </div>
                            {(soundcloudId || spotifyId) &&
                                <div>
                                    <h3>Listen</h3>
                                    {soundcloudId &&
                                        <div>
                                            <h4 className={styles.soundcloud}>SoundCloud</h4>
                                            <iframe title="soundcloud" src={`https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${soundcloudId}&amp;auto_play=false&amp;show_artwork=true&amp;color=0066cc`} width="400" height="109" frameBorder="no" scrolling="no" allow="autoplay"></iframe>
                                        </div>
                                    }
                                    {spotifyId &&
                                        <div>
                                            <h4 className={styles.spotify}>Spotify</h4>
                                            <iframe title="spotify" src={`https://open.spotify.com/embed/track/${spotifyId}`} width="400" height="80" frameBorder="no" allowTransparency={true} allow="encrypted-media"></iframe>
                                        </div>
                                    }
                                </div>
                            }
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
