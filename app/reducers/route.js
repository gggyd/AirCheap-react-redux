import { CHOOSE_AIRPORTS } from '../constants';
import update from 'react-addons-update';

const initalState = {
  origin: '',
  destination: ''
};

const route = (state = initalState, action) => {
  switch (action.type) {
    case CHOOSE_AIRPORTS:
      return update(state, { [action.target]: { $set: action.code } })
    default:
      return state;
  }
};

export default route;