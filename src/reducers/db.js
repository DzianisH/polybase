import * as types from '../types/db';
const initialState = Object.freeze(require('./initialState'));

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.NODE_SELECTED:
        return Object.freeze({
            ...state,
            selectedNode: selectNode(state.nodes, action.payload)
        });
    default:
      return state;
  }
}

const selectNode = (nodes, selector) => {
  const {id, name} = findNode(nodes, createComparator(selector));
  const node = {id, name};
  return node;
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
