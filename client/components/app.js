import React from 'react';

import Header from './header';
import ServerCreate from './server_create';
import { Servers } from '../../imports/collections/servers';
import ServerList from './server_list';

export default () => {
  return (
    <div>
      <div class="header bar">
        <Header />
      </div>
      <div class="row">
        <div class="column left side">
        hi
        </div>

        <div class="column middle">
        <ServerList />
        <ServerCreate />
        </div>

        <div class="column right side">
        hi right
        </div>
      </div>
    </div>
  );
};
