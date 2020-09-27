import {createStore, applyMiddleware, compose} from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/rootReducer';

import rootSaga from '../sagas/rootSaga';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
