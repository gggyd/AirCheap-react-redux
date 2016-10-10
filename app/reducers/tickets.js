import { RECEIVE_TICKETS } from '../constants';

const tickets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return action.tickets;
    default:
      return state;
  }
};

export default tickets;