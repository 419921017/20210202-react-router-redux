import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import history from './../history';


const reducers = combineReducers({
  router: connectRouter(history),
  counter,
});

export default reducers;
