import fetch from 'cross-fetch';

import {
  ADD_PERSONAL_INFO,
  UPDATE_PERSONAL_INFO,
  DEL_PERSONAL_INFO,
  REQUEST_PERSONAL_INFO,
  RECEIVE_PERSONAL_INFO,
  FAIL_PERSONAL_INFO,
} from '../constants/actions-type';

const requestUserInfo = (params) => {
  console.log(params);
  return {
    type: REQUEST_PERSONAL_INFO,
    meta: {
      isFetching: true,
    },
  };
};
const receiveUserInfo = (params, json) => ({
  type: RECEIVE_PERSONAL_INFO,
  payload: { ...json },
  meta: {
    isFetching: false,
  },
});
const failUserInfo = () => ({
  type: FAIL_PERSONAL_INFO,
  meta: {
    isFetching: false,
  },
});

export const fetchGet = params => (dispatch) => {
  dispatch(requestUserInfo(params));
  return fetch('http://localhost:8090/personalInfo')
    .then(
      response => response.json(),
      (error) => {
        console.log('An error occurred.', error);
        dispatch(failUserInfo());
      },
    )
    .then((json) => {
      dispatch(receiveUserInfo(params, json));
    });
};

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
