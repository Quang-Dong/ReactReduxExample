import {helloSaga, watchIncrementAsync} from './hellosaga';

import {put, takeEvery, all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}