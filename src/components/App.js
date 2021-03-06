import React from 'react';
import { connect } from 'react-redux';
import RequestForm from './RequestForm';
import RequestResultDisplayer from './RequestResultDisplayer';
import RequestErrorDisplayer from './RequestErrorDisplayer';
import { requestMake, REQUEST_STATUS } from '../actions';

class App extends React.Component {
  render() {
    const { dispatch, request_status, request_result, error_message, request_string } = this.props;
    return (
      <div className="ui container">
        <RequestForm isLoading={request_status === REQUEST_STATUS.LOADING} makeRequest={(req) => dispatch(requestMake(req))} />
        {request_status === REQUEST_STATUS.FAILED ? <RequestErrorDisplayer error={error_message}/> : <RequestResultDisplayer requestIsEmpty={request_string===""} requestResult={request_result}/>}
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
