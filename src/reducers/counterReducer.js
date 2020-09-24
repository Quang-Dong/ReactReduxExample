import {INCREASE, DECREASE} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case INCREASE:
      return state + action.e;

    case DECREASE:
      return state - action.payload;

    default:
      return state;
  }
}
