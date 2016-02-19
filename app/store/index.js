import { applyMiddleware, createStore } from 'redux';
import { createHistory } from 'history';
import { syncHistory } from 'react-router-redux';
import reducer from '../reducers';

const middleware = syncHistory(createHistory());
const initialState = {};

let store = createStore(
  reducer,
  initialState,
  applyMiddleware(middleware)
);

middleware.listenForReplays(store);

export default store;