import { createAction } from '@reduxjs/toolkit'; 
import * as types from './types';

export const getSongSearch = createAction<types.RequestType | undefined>('songSearch/getSongs');
export const getSong = createAction<types.RequestType | undefined>('song/getSong');
export const getArtistSearch = createAction<types.RequestType | undefined>('artistSearch/getArtists');
export const getArtist = createAction<types.RequestType | undefined>('artist/getArtist');
