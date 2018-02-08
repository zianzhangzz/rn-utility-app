export const isDev = global.process.env.NODE_ENV === 'development'

export const getRandomPlaylist = (playlists) => {
    let length = playlists.length;
    let playlistIndex = Math.floor(Math.random() * length);
    let playlist = playlists[playlistIndex]
    return playlist
};
