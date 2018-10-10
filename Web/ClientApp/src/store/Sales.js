const requestSalesType = "REQUEST_SALES";
const receiveSalesType = "RECEIVE_SALES";
const initialState = { sales: [], isLoading: false };

export const actionCreators = {
  requestSales: () => async (dispatch, getState) => {
    dispatch({ type: requestSalesType });

    const url = `api/Sales`;
    const response = await fetch(url);
    const sales = await response.json();

    dispatch({ type: receiveSalesType, sales });
  }
};
export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestSalesType) {
    return {
      ...state,
      isLoading: true
    };
  }
  if (action.type === receiveSalesType) {
    return {
      ...state,
      sales: action.sales,
      isLoading: false
    };
  }
  return state;
};
