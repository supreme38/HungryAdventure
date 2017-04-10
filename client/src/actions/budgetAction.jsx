export function getBudget({ Budget }) {
  return { type: 'GET_BUDGET_FULFILLED', payload: Budget };
}

export function flightBudget({ price, original }) {
  const newBudget = original - price;
  return { type: 'FLIGHT_BUDGET_FULFILLED', payload: { original, flight: newBudget } };
}
