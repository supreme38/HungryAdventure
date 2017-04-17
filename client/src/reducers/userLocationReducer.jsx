export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_AIRPORTS_FULFILLED' : {
      return { ...state, weather: action.payload };
    }
  }
  return state;
}
