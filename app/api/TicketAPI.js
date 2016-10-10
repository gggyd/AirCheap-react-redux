import 'whatwg-fetch';

let TicketAPI = {
  fetchTickets: function(origin, destination) {
    return fetch(`https://aircheapapi.pro-react.com/tickets?origin=${origin}&destination=${destination}`)
    .then((response) => response.json())
  }
} 

export default TicketAPI;