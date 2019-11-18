import * as types from './types';
import {logState} from '../utils';

const initialState = readInitalState();

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.NODE_SELECTED:
      return logState(selectNode(state, action.payload), action.type);
    default:
      return state;
  }
}

const selectNode = (state, selector) => {
  const node = findNode(state.nodes, createComparator(selector));

  return Object.freeze({
    ...state,
    selectedNode: node
  });
}

const createComparator = selector => {
  const {id, name} = selector;

  return id 
    ? node => node.id === id
    : node => node.name === name;

}

const findNode = (nodes = [], comparator) => {
  for(const node of nodes) {
    if(comparator(node)) {
      return node;
    }
    const innerNode = findNode(node.children, comparator);
    if(innerNode) {
      return innerNode;
    }
  }
  return undefined;
};

function readInitalState() {
  const state = require('./initialState');
  populateIds(state.nodes);
  return Object.freeze(state);
}

function populateIds(nodes = [], firstId = 0) {
  let id = firstId;
  for(const node of nodes) {
    node.id = id++;
    if(!node.fullName) {
      node.fullName = node.name;
    }

    id = populateIds(node.children, id);
  }
  return id;
}