import { createStore, combineReducers } from 'redux';
import chooseTownReducer from '../reducers/chooseTownReducer';
import weatherReducer from '../reducers/weatherReducer';

const reducer = combineReducers({
  chooseTown: chooseTownReducer,
  weather: weatherReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
