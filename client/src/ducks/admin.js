import React from 'react';
import axios from 'axios';
import Immutable from 'seamless-immutable';
import { SubmissionError } from 'redux-form';
import { toast, MDBIcon } from 'mdbreact';
import { getBalance } from './balance';

const prefix = 'admin';

const SENDING_USER_MESSAGE_START = `${prefix}/SENDING_USER_MESSAGE_START`;
const SENDING_USER_MESSAGE_SUCCEED = `${prefix}/SENDING_USER_MESSAGE_SUCCEED`;
const SENDING_USER_MESSAGE_FAILED = `${prefix}/SENDING_USER_MESSAGE_FAILED`;

const userSendMessageStart = () => ({
  type: SENDING_USER_MESSAGE_START
});

const userSendMessageSucceed = () => ({
  type: SENDING_USER_MESSAGE_SUCCEED
});

const userSendMessageFailed = () => ({
  type: SENDING_USER_MESSAGE_FAILED
});

export const userSendMessage = (user, header, message) => (
  dispatch,
  getState
) => {
  dispatch(userSendMessageStart());
  return axios
    .post('/api/admin/send-message')
    .then(response => {
      dispatch(userSendMessageSucceed());
      return response.data;
    })
    .catch(error => {
      dispatch(userSendMessageFailed(error));
    });
};

const initialState = Immutable({
  sendMessageInProgress: false,
  error: ''
});

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SENDING_USER_MESSAGE_START:
      return Immutable.merge(state, {
        sendMessageInProgress: true
      });
    case SENDING_USER_MESSAGE_SUCCEED:
      return Immutable.merge(state, {
        sendMessageInProgress: false
      });
    case SENDING_USER_MESSAGE_FAILED:
      return Immutable.merge(state, {
        sendMessageInProgress: false,
        error: action.error
      });
    default:
      return state;
  }
}
