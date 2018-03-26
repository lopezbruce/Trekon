import React from 'react';

import Header from './header';
import ServerCreate from './server_create';
import { Servers } from '../../imports/collections/servers';
import ServerList from './server_list';

import LeftSide from './leftside';
import RightSide from './rightside';

export default () => {
  return (
    <div>
      <div className="header bar">
        <Header />
      </div>
      <div className="row">
        <div className="column left side">
        <LeftSide />
        </div>

        <div className="column middle">
        <ServerList />
        <ServerCreate />
        </div>

        <div className="column right side">
        <RightSide />
        </div>
      </div>
    </div>
  );
};
