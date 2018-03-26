import React, { Component } from 'react';
import { Servers } from '../../imports/collections/servers';

class QucikAdd extends Component {

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
    Meteor.call('servers.update5', server);
  }

  render() {
  return this.props.servers.map(server => {
    const { name, token, tips} = server;
  return (
    <div>
    <a data-toggle="modal" data-target="#exampleModalCenter">
      ${tips}
    </a>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 class="modal-title" id="exampleModalLongTitle">{name}</h3>
        </div>
        <div class="modal-body">
          <h1 class="center">${tips}</h1>
        </div>
        <div class="modal-footer">
        <div class="center">
          <button type="button" class="btn btn-primary"onClick={() => this.handleTipClick1(server)}>Add 1</button>
          <button type="button" class="btn btn-primary"onClick={() => this.handleTipClick5(server)}>Add 5</button>
          <button type="button" class="btn btn-primary"onClick={() => this.handleTipClick10(server)}>Add 10</button>
          <button type="button" class="btn btn-primary"onClick={() => this.handleTipClick20(server)}>Add 20</button>
          <button type="button" class="btn btn-primary"onClick={() => this.handleTipClick100(server)}>Add 100</button>
        </div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
);
}
}

export default QucikAdd;
