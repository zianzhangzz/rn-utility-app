import { FETCH_RANDOM_PICS} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
      case FETCH_RANDOM_PICS:
        return action.payload;
      default:
        return state
    }
  }
  