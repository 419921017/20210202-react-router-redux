import { push } from 'connected-react-router';
import * as actionTypes from './../actionTypes';

let actions = {
  increment() {
    return { type: actionTypes.INCREMENT };
  },
  decrement() {
    return { type: actionTypes.DECREMENT };
  },
  goHome() {
    console.log(push('/'));
    return push('/');
  },
};
export default actions;
