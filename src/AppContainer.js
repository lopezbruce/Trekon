import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { Route, Switch, withRouter } from 'react-router-dom';
import App from './App';


class AppContainer extends Component {

  render() {
    return (
        <div> test </diV>
      );
    }
    return null;
  }

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  withRouter(AppContainer)
);
