import * as types from '../types/db';

export function selectGroup(id) {
    return {
        type: types.DB_GROUP_SELECTED,
        payload: {id}
    };
}
