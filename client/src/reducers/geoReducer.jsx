export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_GEO_FULFILLED' : {
      return { ...state, locator: action.payload };
    }
  }
  return state;
}
