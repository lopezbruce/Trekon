import React, { Component } from 'react';

class LeftSide extends Component {
  render() {
    return (
      <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action"><h5>Stats</h5></button>
      <button type="button" className="list-group-item list-group-item-action active">
        <h5>Servers</h5>
      </button>
      <button type="button" className="list-group-item list-group-item-action"><h5>Tables</h5></button>
      <button type="button" className="list-group-item list-group-item-action"><h5>Customers</h5></button>
      <button type="button" className="list-group-item list-group-item-action"><h5>Messages</h5></button>
      </div>
    );
  }
}

export default LeftSide;
