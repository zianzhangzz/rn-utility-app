import keys from './keys'

export const spotifyUrl = {
    BASE_URL : 'https://api.spotify.com',
    CATEGORIES_URL : 'https://api.spotify.com/v1/browse/categories',
    USERS_URL : 'https://api.spotify.com/users',
    PLAYLIST : 'https://api.spotify.com/v1/users/spotify/playlists',
    FEATURED_PLAYLIST : 'https://api.spotify.com/v1/browse/featured-playlists',
    TOKEN: 'https://accounts.spotify.com/api/token',
    SPOTIFY_CLIENT_ID : '895ae434e10745f8b7aa65f56f6bdfb3',
}

export const lastFmUrl = {
    BASE_URL: 'http://ws.audioscrobbler.com/2.0/',
    TOP_TRACKS: `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${keys.lastFmKey}&format=json`,
    TOP_TAGS: `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${keys.lastFmKey}&format=json`,
    
}

export const imdbUrl = {
    BASE_URL: `http://www.omdbapi.com/?apikey=${keys.imdbey}]&`,
    SEARCH_MOVIE: `http://www.omdbapi.com/?apikey=${keys.imdbey}&type=movie&s=`
}

export const goodreadsUrl = {
    BOOKS: `https://www.goodreads.com/shelf/list.xml?key=${keys.goodreadsKey}&user_id=70763164-zian-zhang`,
}