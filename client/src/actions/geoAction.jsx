import axios from 'axios';

export function fetchGeo(placeObj) {
  return function (dispatch) {
    return axios.get('/api/geocoder', {
      params: placeObj })
      .then(response => dispatch({ type: 'FETCH_GEO_FULFILLED', payload: response.data[0] }))
      .catch(err => dispatch({ type: 'FETCH_GEO_REJECTED', payload: err }));
  };
}
