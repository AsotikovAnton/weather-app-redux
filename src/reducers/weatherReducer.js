import { FETCH_TOWN_REQUEST, FETCH_TOWN_SUCCESS, FETCH_TOWN_FAILURE } from "../actions/actionTypes";

const initialState = {
  data: {},
  loading: false,
  error: null,
  isActive: false
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOWN_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_TOWN_SUCCESS:
      const {data} = action.payload;
      return {...state, data, loading: false, error: null, isActive: true};
    case FETCH_TOWN_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    default:
      return state;
  }
}
