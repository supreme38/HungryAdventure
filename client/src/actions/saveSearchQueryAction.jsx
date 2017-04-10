import axios from 'axios';

export default function saveSearchQuery({ email, budget, startDate, endDate, timestamp }) {
  return function (dispatch) {
    console.log('RETURNED OBJECT--->', email, budget, startDate, endDate, timestamp);
    return axios.get('/api/dbQuery', {
      params: { email, budget, startDate, endDate, timestamp } })
      .then((response) => {
        console.log(response);
        return dispatch({ type: 'SAVE_SEARCHQUERY_FULFILLED', payload: response.data[0] });
      })
      .catch((err) => {
        return dispatch({ type: 'SAVE_SEARCHQUERY_FAILED', payload: err });
      });
  };
}
