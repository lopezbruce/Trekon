import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import { graphql, gql } from 'react-apollo';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Summary from './components/Summary';
import Statistics from './components/Statistics';
import Welcome from './components/Welcome';

class App extends React.Component {
  componentDidMount() {
    //TODO: Set up functional user subscriptions to get rid of page reloading on data changes
  }

  render() {
    if (this.props.userQuery.loading === true) {
      return <div>LOADING...</div>;
    }

    return (
      <div className={this.props.className}>
        <Nav data={this.props.userQuery} />
        <Switch>
          <Route
            path="/Calendar"
            component={() => (
              <Calendar
                data={this.props.userQuery}
                loading={this.props.userQuery.loading}
              />
            )}
          />
          <Route
            path="/Summary"
            component={() => <Summary data={this.props.userQuery} />}
            loading={this.props.userQuery.loading}
          />
          <Route
            path="/Statistics"
            component={() => (
              <Statistics
                data={this.props.userQuery}
                loading={this.props.userQuery.loading}
              />
            )}
          />
          <Route path="/*" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

//TODO: Set up functional user subscriptions to get rid of page reloading on data changes

const AppWithData = graphql(userQuery, {
  name: 'userQuery',
  options: ownProps => ({ variables: { id: ownProps.id } })

  //TODO: Set up functional user subscriptions to get rid of page reloading on data changes
});

export default AppWithData(withRouter());
