import { FETCH_PLAYLIST_RANDOM } from '../actions/types';


export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PLAYLIST_RANDOM:
            return action.payload;
        default:
            return state;
    }
}