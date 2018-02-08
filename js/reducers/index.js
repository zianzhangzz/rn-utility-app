import { combineReducers } from 'redux';
import topNews from './topNews';
import pictures from './pictures';
import topMusic from './music';

const appReducer = combineReducers({
    topNews,
    pictures,
    topMusic
})

export default appReducer;