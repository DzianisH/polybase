import * as types from './types';
import {logState} from '../utils';

export default function (state = {expand: []}, action = {}) {
  switch (action.type) {
    case types.EXPAND_CHILDREN:
      return logState(expandChildren(state, action.payload.id), action.type);
    case types.COLLAPSE_CHILDREN:
      return logState(collapseChildren(state, action.payload.id), action.type);
    default:
      return state;
  }
}

const expandChildren = (state, id) => {
  const expand = state.expand
    ? state.expand.concat([id])
    : [id];  
  return {...state, expand};
}

const collapseChildren = (state, id) => {
  const expand = state.expand
    ? state.expand.filter(eId => eId !== id)
    : [];
  return {...state, expand};
}
