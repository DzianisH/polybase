import * as types from '../types/db';
const initialState = Object.freeze(require('./initialState'));

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.DB_GROUP_SELECTED:
        return Object.freeze({
            ...state,
            selectedGroup: selectGroup(state.groups, action.payload.id)
        });
    default:
      return state;
  }
}

const selectGroup = (groups, groupId) => {
  const {id, name} = findGroup(groups, groupId);
  return {id, name};
}

const findGroup = (groups = [], groupId) => {
  for(const group of groups) {
    if(group.id === groupId) {
      return group;
    }
    const innerGroup = findGroup(group.children, groupId);
    if(innerGroup) {
      return innerGroup;
    }
  }
  return undefined;
};
