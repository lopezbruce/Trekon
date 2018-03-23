import React from 'react';

import Header from './header';
import ServerCreate from './server_create';
import { Servers } from '../../imports/collections/servers';
import ServerList from './server_list';

export default () => {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="column side">
        hi
        </div>

        <div class="column middle">
        <ServerCreate />
        <ServerList />
        </div>

        <div class="column side">
        hi right
        </div>
      </div>
    </div>
  );
};
