import axios from 'axios';

export function fetchYelpEvents(placeObj) {
  console.log('THIS IS THE YELP', placeObj)
  return function (dispatch) {
    return axios.get('/api/yelp', {
      params: placeObj })
      .then(response => dispatch({ type: 'FETCH_YELP_FULFILLED', payload: response.data.businesses }))
      .catch(err => dispatch({ type: 'FETCH_GEO_REJECTED', payload: err }));
  };
}
