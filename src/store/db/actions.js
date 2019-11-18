import * as types from './types';

export function selectGroupById(id) {
    return {
        type: types.NODE_SELECTED,
        payload: {id}
    };
}

export function selectGroupByName(name) {
    return {
        type: types.NODE_SELECTED,
        payload: {name}
    };
}

export function expandChildren(id) {
    return {
        type: types.EXPAND_CHILDREN,
        payload: {id}
    }
}

export function collapseChildren(id) {
    return {
        type: types.COLLAPSE_CHILDREN,
        payload: {id}
    }
}