import React from 'react';
import { SongResultType } from '../store/types';
import LazyLoadElement from './presentation/LazyLoadElement';
import styles from './SearchItem.module.scss';

const SearchItem = ({ item: {
    song_title,
    artist_name,
    song_writers,
    song_release_date,
    album_name,
    song_image_url,
    lyrics,
    error,
    media_spotify_track_id,
    media_soundcloud_track_id
} }: SearchItemProps): React.ReactElement => {

    const songWriters = song_writers.join(', ');

    // get spotify widget endpoint
    let spotifyEndpoint = process.env.REACT_APP_SPOTIFY_WIDGET_ENDPOINT;
    if (media_spotify_track_id && spotifyEndpoint) {
        spotifyEndpoint = spotifyEndpoint.replace('insertId', media_spotify_track_id);
    };

    // get soundcloud widget endpoint
    let soundcloudEndpoint = process.env.REACT_APP_SOUNDCLOUD_WIDGET_ENDPOINT;
    if (media_soundcloud_track_id && soundcloudEndpoint) {
        soundcloudEndpoint = soundcloudEndpoint.replace('insertId', media_soundcloud_track_id);
    };

    return (
        <div className={styles.root}>
            {!error &&
                <div>
                    <div className={styles.headerRoot}>
                        <div className={styles.headerWrapper}>
                            <div className={styles.headerImage}>
                                <LazyLoadElement> 
                                    {(onload: any) => 
                                        <img
                                            src={song_image_url}
                                            alt="Song Art"
                                            onLoad={onload}
                                        />
                                    }
                                </LazyLoadElement>
                            </div>
                            <div className={styles.headerMain}>
                                <h2>{song_title}</h2>
                                <div className={styles.headerDetails}>
                                    <p>
                                        <span>Artist</span>
                                        <strong>{artist_name}</strong>
                                    </p>
                                    <p>
                                        <span>Written by</span>
                                        <strong>{songWriters}</strong>
                                    </p>
                                    <p>
                                        <span>Album</span>
                                        <strong>{album_name}</strong>
                                    </p>
                                    <p><span>Released</span>
                                    <strong>{song_release_date}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentRoot}>
                        <div className={styles.contentWrapper}>
                            <div>
                                <h3>Lyrics</h3>
                                <p dangerouslySetInnerHTML={ {__html: lyrics} }></p>
                            </div>
                            {(soundcloudEndpoint || spotifyEndpoint) &&
                                <div>
                                    <h3>Listen</h3>
                                    {soundcloudEndpoint &&
                                        <div>
                                            <h4 className={styles.soundcloud}>SoundCloud</h4>
                                            <iframe title="soundcloud" src={soundcloudEndpoint} width="400" height="109" frameBorder="no" scrolling="no" allow="autoplay"></iframe>
                                        </div>
                                    }
                                    {spotifyEndpoint &&
                                        <div>
                                            <h4 className={styles.spotify}>Spotify</h4>
                                            <iframe title="spotify" src={spotifyEndpoint} width="400" height="80" frameBorder="no" allowTransparency={true} allow="encrypted-media"></iframe>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {error && <h2 className={styles.itemError}>Song data not found</h2>}
        </div>
    );
};

type SearchItemProps = {
    readonly item: SongResultType;
}

export default SearchItem;
