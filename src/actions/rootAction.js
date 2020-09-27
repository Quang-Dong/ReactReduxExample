import {INCREASE, DECREASE, INCREASE_DONE, CLICK} from './types';

export const counterIncrease = (e) => ({type: INCREASE, e});
export const click = () => ({type: CLICK});
export const counterDecrease = (i) => ({type: DECREASE, payload: i});
