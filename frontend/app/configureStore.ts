/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose, AnyAction } from 'redux';
import { fromJS } from 'immutable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware, { SagaMiddleware, SagaMiddlewareOptions, Task } from 'redux-saga';
import { createReducer } from './reducers';
import globalReducer from '@app/containers/App/reducer';
import { History } from 'history';

declare var window: any;
const sagaMiddleware = createSagaMiddleware();


export function configureStore(initialState = {}, history: History) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore<any, AnyAction, {runSaga: {(...args: any): Task}, injectedReducers: object, injectedSagas: object}, {}>(
    connectRouter(history)(globalReducer),
    fromJS(initialState),
    compose(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return store;
}