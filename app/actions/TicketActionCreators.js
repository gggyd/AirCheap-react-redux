import { REQUEST_TICKETS, RECEIVE_TICKETS } from '../constants';
import TicketAPI from '../api/TicketAPI';

let TicketActionCreators = {
  fetchTickets(origin, destination) {
    return (dispatch) => {
      dispatch({type: REQUEST_TICKETS});
      TicketAPI.fetchTickets(origin, destination).then(
        (tickets) => dispatch({type: RECEIVE_TICKETS, success: true, tickets}),
        (error) => dispatch({type: RECEIVE_TICKETS, success: false}) 
      );
    };
  }
}

export default TicketActionCreators;