import * as types from './types';
const initialState = readInitalState();

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.NODE_SELECTED:
      return selectNode(state, action.payload);
    case types.EXPAND_CHILDREN:
      return logState(expandChildren(state, action.payload.id), 'after EXPAND_CHILDREN');
    case types.COLLAPSE_CHILDREN:
      return logState(collapseChildren(state, action.payload.id), 'after COLLAPSE_CHILDREN');
    default:
      return state;
  }
}

const logState = (newState, msg) => {
  console.log(newState, msg);
  return newState;
}

const selectNode = (state, selector) => {
  const node = findNode(state.nodes, createComparator(selector));

  return Object.freeze({
    ...state,
    selectedNode: node
  });
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