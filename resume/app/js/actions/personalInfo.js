import {
  ADD_PERSONAL_INFO,
  UPDATE_PERSONAL_INFO,
  DEL_PERSONAL_INFO,
} from '../constants/actions-type';

export function add(obj = {}) {
  return {
    type: ADD_PERSONAL_INFO,
    payload: { ...obj },
  };
}

export function update(obj = {}) {
  return {
    type: UPDATE_PERSONAL_INFO,
    payload: { ...obj },
  };
}

export function del(key) {
  return {
    type: DEL_PERSONAL_INFO,
    payload: { [key]: null },
  };
}
