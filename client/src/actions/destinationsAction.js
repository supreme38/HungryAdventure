import axios from 'axios';

export function fetchDestinations(searchObj) {
  return function (dispatch) {
    return axios.get('/api/anywhere', {
      params: searchObj })
      .then(response => dispatch({ type: 'FETCH_DESTINATIONS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_DESTINATIONS_REJECTED', payload: err }));
  };
}
