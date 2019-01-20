import { combineReducers } from 'redux'

import { ACTIONS } from '../actions/actions.js';

function updateGhRawData (state = [], action) {
  switch (action.type) {
    case ACTIONS.GH_RAW_DATA:
      return action.data;
    default:
      return state;
  }
}

function updateGhUrl (state = '', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_URL:
      return action.url;
    default:
      return state;
  }
}

export default combineReducers({ updateGhUrl, updateGhRawData });

