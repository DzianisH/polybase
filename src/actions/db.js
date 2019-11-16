import * as types from '../types/db';

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
