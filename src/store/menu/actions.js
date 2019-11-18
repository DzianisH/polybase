import * as types from './types';

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
