import { combineReducers } from 'redux';
import topNews from './topNews';
import pictures from './pictures';
import topMusic from './music';
import movie from './movie';

const appReducer = combineReducers({
    topNews,
    pictures,
    topMusic,
    movie
})

export default appReducer;