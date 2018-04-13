import React, { Component } from 'react';
import { AppBar, IconButton } from 'material-ui';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavDrawer from './NavDrawer';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }

  handleOpenDrawer = () => {
    this.setState({ openDrawer: true });
  };

  handleCloseDrawer = () => {
    this.setState({ openDrawer: false });
  };

  render() {
    return (
      <div className="Nav">
        <AppBar
          title={
            <span>
              Trekon
            </span>
          }
      </div>
    );
  }
}
