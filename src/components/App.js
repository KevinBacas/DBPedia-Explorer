import React from 'react';
import { connect } from 'react-redux';
import RequestForm from './RequestForm';
import { requestMake, REQUEST_STATUS } from '../actions';

class App extends React.Component {
  render() {
    console.log(this.state, this.props);
    const { dispatch, request_status } = this.props;
    return (
      <div className="ui grid">
        <div className="eight wide column">
          <RequestForm isLoading={request_status === REQUEST_STATUS.LOADING} makeRequest={(req) => dispatch(requestMake(req))} />
        </div>
        <div className="eight wide column">
        </div>
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
