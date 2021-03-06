const requestPartnersType = "REQUEST_PARTNERS";
const receivePartnersType = "RECEIVE_PARTNERS";
const initialState = { partners: [], isLoading: false };

export const actionCreators = {
  requestPartners: () => async (dispatch, getState) => {
    dispatch({ type: requestPartnersType });

    const url = `api/Partners`;
    const response = await fetch(url);
    const partners = await response.json();

    dispatch({ type: receivePartnersType, partners });
  }
};
export const reducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case requestPartnersType:
      return {
        ...state,
        isLoading: true
      };
    case receivePartnersType:
      return {
        ...state,
        partners: action.partners,
        isLoading: false
      };
    default:
      return state;
  }
};
