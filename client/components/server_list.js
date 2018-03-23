import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Servers } from '../../imports/collections/servers';

class ServerList extends Component {
  renderRows() {
    return this.props.servers.map(server => {
      const { name, token } = server;

      return (
        <tr key={token}>
          <td>{name}</td>
          <td>
            {token}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Server ID</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('servers');

  return { servers: Servers.find({}).fetch() };
}) (ServerList);
