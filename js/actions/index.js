import axios from 'axios';
import * as types from './types';
import { fetchNews, fetchPic } from '../api/firebase';
import { getRandomPicSplash } from '../api/unsplash';
import { getRandomPlaylist } from '../common/utils'
import { lastFmUrl, imdbUrl } from '../api/urls'
import * as keys from '../api/keys'

const apiKey = '2603c47d6d1349418888897b5ea3abac';
const baseURL = 'https://newsapi.org';
const topHeadlines = '/v2/top-headlines?sources=';
var api = axios.create({
    timeout: 1000,
    headers: {'X-Api-Key': apiKey},

  });

//music
export const fetchTopTags = async () => {
    const res = await axios.get(lastFmUrl.TOP_TAGS);
    return res.data.tags.tag;
}

export const fetchAlbumsWithTag = async (tag) => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=50e97c654b5350da62836774bac3e9ba&format=json`
    const res = await axios.get(url);
    return res.data.albums.album;
}

export const fetchPlaylistRandom = () => async dispatch => {
    const tags = await fetchTopTags();
    const albums = await fetchAlbumsWithTag(tags[0].name)
    dispatch({ type: types.FETCH_PLAYLIST_RANDOM, payload: albums });
    
  }; 

//news 
export const fetchTopNews = (newsBrand) => async dispatch => {
    const url = baseURL + topHeadlines + newsBrand;
    const res = await api.get(url);
    const topNews = res.data.articles;
    dispatch({ type: types.FETCH_TOP_NEWS, payload: topNews });
}

export const fetchFavNews = () => async dispatch => {
    const res =  await fetchNews();
    dispatch({ type: types.FETCH_FAV_NEWS, payload: res });
}

//pictues
export const fetchRandomPic = () => async dispatch => {
    const res =  await getRandomPicSplash();
    dispatch({ type: types.FETCH_RANDOM_PICS, payload: res });
}

export const fetchFavPic = () => async dispatch => {
    const res =  await fetchPic();
    dispatch({ type: types.FETCH_RANDOM_PICS, payload: res });
}

export const searchMovie = (keyword) => async dispatch => {
    const url = imdbUrl.SEARCH_MOVIE+'Sky'
    const res =  await axios.get(url);
    dispatch({ type: types.SEARCH_MOVIE, payload: res.data.Search });
}