import React from 'react';
import classnames from 'classnames';

class RequestForm extends React.Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    if(!this.props.isLoading) {
      let request = this.refs.request.getDOMNode().value;
      if(request !== "") {
        this.props.makeRequest(request);
      }
    }
  }

  render() {
    let buttonClassNames = classnames({
      loading: this.props.isLoading,
      disabled: this.props.isLoading,
      ui: true,
      primary: true,
      button: true,
      massive: true
    });
    return (
      <div className="ui form">
        <div className="field">
          <label>Request :</label>
          <textarea disabled={this.props.isLoading} ref="request" />
        </div>
        <button className={buttonClassNames} onClick={this._handleClick}>Send request</button>
      </div>
    );
  }
}

export default RequestForm;
