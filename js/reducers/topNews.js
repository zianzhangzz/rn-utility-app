import { FETCH_TOP_NEWS, FETCH_FAV_NEWS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
      case FETCH_TOP_NEWS:
        return action.payload;
      case FETCH_FAV_NEWS:
        return action.payload;
      default:
        return state
    }
  }
  