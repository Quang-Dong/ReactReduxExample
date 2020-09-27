import {
  INCREASE,
  DECREASE,
  INCREASE_DONE,
  STOP_COUNTER,
} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case INCREASE:
      return state + (action.e || 1);

    case DECREASE:
      return state - action.payload;

    case INCREASE_DONE:
      return state + console.log('INCREASE_DONE');

    case STOP_COUNTER:
      return console.log('STOP_COUNTER');

    default:
      return state;
  }
}
