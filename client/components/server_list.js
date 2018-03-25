import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Servers } from '../../imports/collections/servers';

class ServerList extends Component {
  onServerRemove(server) {
    Meteor.call('servers.remove', server);
  }

  handleTipClick1(server) {
    Meteor.call('servers.update', server);
  }
  handleTipClick5(server) {
    Meteor.call('servers.update2', server);
  }
  handleTipClick10(server) {
    Meteor.call('servers.update3', server);
  }
  handleTipClick20(server) {
    Meteor.call('servers.update4', server);
  }
  handleTipClick100(server) {
    Meteor.call('servers.update4', server);
  }


  renderRows() {
    return this.props.servers.map(server => {
      const { name, token, tips} = server;

      return (
        <tr key={token}>
          <td>
            <a>{name}</a>
          </td>
          <td>
            {token}
          </td>
          <td>
            <a onClick={() => this.handleTipClick1(server)}>${tips}</a>
          </td>
          <td>
            <a onClick={() => this.handleTipClick5(server)}>${tips}</a>
          </td>
          <td>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onServerRemove(server)}>
              Remove
            </button>
            </span>
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
            <th>Tip</th>
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
