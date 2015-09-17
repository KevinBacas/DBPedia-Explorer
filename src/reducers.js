import { REQUEST_MAKE, REQUEST_FAILED, requestFailed } from './actions';
import store from './store';

const initialState = {
  request_string: undefined,
  request_status: undefined,
  error_message: undefined
};

let qq = true;

function requestApp(state = initialState, action) {
  switch (action.type) {
  case REQUEST_MAKE:
    if(qq) {
      setTimeout(() => {
        store.dispatch(requestFailed("There is an error"));
      }, 1000);
      qq = false;
    }
    return Object.assign({}, state, {
      request_string: action.request_string,
      request_status: action.request_status
    });
  case REQUEST_FAILED:
    return Object.assign({}, state, {
      error_message: action.error_message,
      request_status: action.request_status
    });
  default:
    return state;
  }
}

export default requestApp;
