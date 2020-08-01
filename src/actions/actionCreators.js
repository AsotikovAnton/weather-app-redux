import {
  CHANGE_TOWN_FIELD,
  FETCH_TOWN_REQUEST, 
  FETCH_TOWN_SUCCESS,
  FETCH_TOWN_FAILURE} from "./actionTypes";

const _urlBase = 'http://api.openweathermap.org/data/2.5/weather?appid=c9744564742f73ddda7ea74738df772a&units=metric&lang=ru&q=';

export function changeTownField(name, value) {
  return {type: CHANGE_TOWN_FIELD, payload: {name, value}}
}

export function fetchTownRequest() {
  return {type: FETCH_TOWN_REQUEST}
}

export function fetchTownSuccess(data) {
  return {type: FETCH_TOWN_SUCCESS, payload: {data}}
}

export function fetchTownFailure(error) {
  return {type: FETCH_TOWN_FAILURE, payload: {error}}
}

export const fetchTown = async (dispatch, town) => {
  dispatch(fetchTownRequest());
  try {
    const response = await fetch(`${_urlBase}${town}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchTownSuccess(data));
  } catch (error) {
    dispatch(fetchTownFailure(error.message));
  }
}
