import React from 'react';

import Header from './header';
import ServerCreate from './server_create';
import { Servers } from '../../imports/collections/servers';
import ServerList from './server_list';

export default () => {
  return (
    <div>
      <Header />
      <ServerCreate />
      <ServerList />
    </div>
  );
};
