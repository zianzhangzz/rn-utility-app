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