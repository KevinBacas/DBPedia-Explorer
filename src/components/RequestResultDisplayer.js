import React from 'react';

class RequestResultDisplayer extends React.Component {
  render() {
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

export default RequestResultDisplayer;
