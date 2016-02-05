import { applyMiddleware, compose, createStore } from 'redux';
import history from '../utils/history';
import { syncHistory } from 'react-router-redux';
import reducer from '../reducers';

const middleware = syncHistory(history);
const initialState = {};

let store = createStore(
  reducer,
  initialState,
  applyMiddleware(middleware)
);

middleware.listenForReplays(store);

export default store;
