import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import { graphql, gql } from 'react-apollo';

class App extends React.Component {
  componentDidMount() {
    /*
    //TODO: Set up functional user subscriptions to get rid of page reloading on data changes
    this.props.subscribeToUserChange({
      id: this.props.id,
    })
    */
  }

  render() {
    return (
      <div className={this.props.className}>Test</div>
    );
    }
  }
/*
//TODO: Set up functional user subscriptions to get rid of page reloading on data changes

//TODO: Set up functional user subscriptions to get rid of page reloading on data changes

export default AppWithData(withRouter(StyledApp));
