import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo';
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from 'subscriptions-transport-ws';
import { GC_AUTH_TOKEN } from './utils/constants';

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      const token = localStorage.getItem(GC_AUTH_TOKEN);
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }
]);
