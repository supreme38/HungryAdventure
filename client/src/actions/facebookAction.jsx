import axios from 'axios';

export default function queryDB(profileObj) {
  return function (dispatch) {
    console.log(profileObj);
    return axios.get('/api/dbQuery', {
      params: profileObj })
      .then((response) => {
        console.log(response)
        return dispatch({ type: 'LOAD_PROFILE_FULFILLED', payload: response.data[0] });
      })
      .catch((err) => {
        return dispatch({ type: 'LOAD_PROFILE_REJECTED', payload: err });
      });
  };
}
