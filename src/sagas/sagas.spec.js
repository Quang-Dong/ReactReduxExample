import {incrementAsync, delay} from './hellosaga';
import {put, call} from 'redux-saga/effects';

test('incrementAsync Saga test', () => {
  const gen = incrementAsync();
  expect(gen.next().value).toEqual(call(delay, 1000));
  expect(gen.next().value).toEqual(put({type: 'INCREMENT'}));
  expect(gen.next()).toEqual({done: true, value: undefined});
});

// yarn test sagas.spec.js
