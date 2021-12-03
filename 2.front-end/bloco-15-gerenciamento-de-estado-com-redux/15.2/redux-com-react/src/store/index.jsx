import { createStore, combineReducers, compose } from 'redux';
import listReducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);

const rootReducer = combineReducers({ listReducer });

const store = createStore(
  rootReducer,
  compose(extension),
);

export default store;