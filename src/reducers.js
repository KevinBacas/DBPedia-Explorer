import { REQUEST_MAKE, REQUEST_COMPLETED, REQUEST_FAILED, requestFailed, requestCompleted } from './actions';
import store from './store';
import $ from 'jquery';

const initialState = {
  request_string: "",
  request_result: [],
  request_status: REQUEST_COMPLETED,
  error_message: ""
};

function requestApp(state = initialState, action) {
  switch (action.type) {
  case REQUEST_MAKE:
    $.get('http://fr.dbpedia.org/sparql?query='+action.request_string+"&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on")
    .done((data) => store.dispatch(requestCompleted(data.results.bindings)))
    .fail((error) => store.dispatch(requestFailed(error.responseText)));

    return Object.assign({}, state, {
      request_string: action.request_string,
      request_status: action.request_status
    });
  case REQUEST_FAILED:
    return Object.assign({}, state, {
      error_message: action.error_message,
      request_status: action.request_status
    });
  case REQUEST_COMPLETED:
    return Object.assign({}, state, {
      request_result: action.result,
      request_status: action.request_status
    });
  default:
    return state;
  }
}

export default requestApp;
