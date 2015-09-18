import React from 'react';

class RequestResultDisplayer extends React.Component {
  render() {
    if(this.props.requestIsEmpty) {
      return (
        <div className="ui info message">
          <div className="header">
            How to use ?
          </div>
          <ul className="list">
            <li>Type your SparQL request in the field</li>
            <li>Submit your request</li>
            <li>See the result !</li>
            <li>Very simple :)</li>
          </ul>
        </div>
      );
    } else {
      let rows = this.props.requestResult.map((entry) => {
        let props = Object.keys(entry);
        return (<tr>{props.map((key) => <td>{entry[key].value}</td>)}</tr>);
      });
      return (
        <table className="ui celled table">
         <tbody>
           {rows}
         </tbody>
       </table>
      );
    }
  }
}

export default RequestResultDisplayer;
