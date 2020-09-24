import {INCREASE, DECREASE} from './types';

export const counterIncrease = (e) => ({type: INCREASE, e});
export const counterDecrease = (i) => ({type: DECREASE, payload: i});
