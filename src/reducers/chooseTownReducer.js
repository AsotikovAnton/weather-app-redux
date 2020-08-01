import {
  CHANGE_TOWN_FIELD,
  FETCH_TOWN_REQUEST,
  FETCH_TOWN_SUCCESS,
  FETCH_TOWN_FAILURE} from "../actions/actionTypes";

const initialState = {
  item: {
    town: ''
  },
  loading: false,
  error: null
}

export default function chooseTownReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOWN_FIELD:
      const {name, value} = action.payload;
      return {
        ...state,
        item: {
          ...state.item,
          [name]: value
        }
      }
    case FETCH_TOWN_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_TOWN_SUCCESS:
      return {...initialState};
    case FETCH_TOWN_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    default:
      return state;
  }
}
