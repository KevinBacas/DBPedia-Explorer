import React from 'react';
import classnames from 'classnames';
import YASQE from '../../node_modules/yasgui-yasqe/dist/yasqe.bundled.js';
require('../../node_modules/yasgui-yasqe/dist/yasqe.css');

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

  componentDidMount() {
    YASQE.fromTextArea(this.refs.request.getDOMNode());
  }

  render() {
    let buttonClassNames = classnames({
      loading: this.props.isLoading,
      disabled: this.props.isLoading,
      ui: true,
      primary: true,
      button: true,
      fluid: true,
      massive: true
    });
    return (
      <div className="ui form">
        <div className="field">
          <textarea disabled={this.props.isLoading} ref="request" />
        </div>
        <button className={buttonClassNames} onClick={this._handleClick}>Send request</button>
      </div>
    );
  }
}

export default RequestForm;
