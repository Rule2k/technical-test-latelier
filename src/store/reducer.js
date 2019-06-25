/**
 * Initial State
 */
const initialState = {
  data: '',
  loading: true,
};

/**
 * Types
 */

export const LOADING_APP = 'LOADING_APP';
const DATA_RECEIVED = 'DATA_RECEIVED';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        data: action.data,
        loading: false,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const loadingApp = () => ({
  type: LOADING_APP,
});

export const dataReceived = data => ({
  type: DATA_RECEIVED,
  data,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
