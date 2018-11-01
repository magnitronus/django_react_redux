/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import globalReducer from '@app/containers/App/reducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer(injectedReducers?: object) {
  return combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });
}