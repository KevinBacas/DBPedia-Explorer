import React from 'react';

class RequestErrorDisplayer extends React.Component {
  render() {
    return (
      <div className="ui negative message">
        <div className="header">
          There is an error in the request :
        </div>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default RequestErrorDisplayer;
