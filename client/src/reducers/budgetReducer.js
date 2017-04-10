export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'GET_BUDGET_FULFILLED' : {
      console.log('FDSLJKDFSJKFDSJLKDFSLKJ', action.payload);
      return { ...state, original: action.payload };
    }
    case 'FLIGHT_BUDGET_FULFILLED' : {
      return { ...state, flight: action.payload.flight };
    }
  }
  return state;
}
