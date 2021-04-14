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

    const songWriters = song_writers.length > 0 ? song_writers.join(', ') : '';

    // get soundcloud widget endpoint
    let soundcloudEndpoint = '';
    if (media_soundcloud_track_id) {
        const endpoint = process.env.REACT_APP_SOUNDCLOUD_WIDGET_ENDPOINT || '';
        soundcloudEndpoint = endpoint.replace('insertId', media_soundcloud_track_id);
    };

    // get spotify widget endpoint
    let spotifyEndpoint = '';
    if (media_spotify_track_id) {
        const endpoint = process.env.REACT_APP_SPOTIFY_WIDGET_ENDPOINT || '';
        spotifyEndpoint = endpoint.replace('insertId', media_spotify_track_id);
    };

    return (
        <div className={styles.root}>
            {!error &&
                <article aria-labelledby="songTitle">
                    <section className={styles.headerRoot} aria-label="Song Information">
                        <div className={styles.headerWrapper}>
                            <div className={styles.headerImage}>
                                <LazyLoadElement> 
                                    {(onload: any) => 
                                        <img
                                            src={song_image_url}
                                            alt="Song Album Art"
                                            onLoad={onload}
                                        />
                                    }
                                </LazyLoadElement>
                            </div>
                            <div className={styles.headerMain}>
                                <h2 id="songTitle">{song_title}</h2>
                                <div className={styles.headerDetails}>
                                    {artist_name &&
                                        <p>
                                            <span id="artistName">Artist</span>
                                            <strong aria-labelledby="artistName">{artist_name}</strong>
                                        </p>
                                    }
                                    {songWriters &&
                                        <p>
                                            <span id="songWriters">Written by</span>
                                            <strong aria-labelledby="songWriters">{songWriters}</strong>
                                        </p>
                                    }
                                    {album_name &&
                                        <p>
                                            <span id="album">Album</span>
                                            <strong aria-labelledby="album">{album_name}</strong>
                                        </p>
                                    }
                                    {song_release_date &&
                                        <p>
                                            <span id="releaseDate">Released</span>
                                            <strong aria-labelledby="releaseDate">{song_release_date}</strong>
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={styles.contentRoot}>
                        <div className={styles.contentWrapper}>
                            <section aria-labelledby="lyrics">
                                <h3 id="lyrics">Lyrics</h3>
                                <p dangerouslySetInnerHTML={ {__html: lyrics} }></p>
                            </section>
                            {(media_soundcloud_track_id || media_spotify_track_id) &&
                                <section aria-labelledby="listen">
                                    <h3 id="listen">Listen</h3>
                                    {media_soundcloud_track_id &&
                                        <figure>
                                            <figcaption>
                                                <h4 className={styles.soundcloud}>SoundCloud</h4>
                                            </figcaption>
                                            <iframe title="soundcloud" src={soundcloudEndpoint} width="400" height="109" frameBorder="no" scrolling="no" allow="autoplay"></iframe>
                                        </figure>
                                    }
                                    {media_spotify_track_id &&
                                        <figure>
                                            <figcaption>
                                                <h4 className={styles.spotify}>Spotify</h4>
                                            </figcaption>
                                            <iframe title="spotify" src={spotifyEndpoint} width="400" height="80" frameBorder="no" allowTransparency={true} allow="encrypted-media"></iframe>
                                        </figure>
                                    }
                                </section>
                            }
                        </div>
                    </div>
                </article>
            }
            {error && <h2 className={styles.itemError}>Song data not found</h2>}
        </div>
    );
};

type SearchItemProps = {
    readonly item: SongResultType;
}

export default SearchItem;
