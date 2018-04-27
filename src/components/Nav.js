import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar, IconButton } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavDrawer from './NavDrawer';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'Black',
    primary1Color: 'navy',
    primary2Color: 'pink',
    accent1Color: 'purple',
    pickerHeaderColor: 'red',
    alternateTextColor: 'white'
  }
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="Nav">
          <AppBar
            title={
              <span
                style={{
                  position: 'relative',
                  right: '32px',
                  fontSize: '30px',
                  fontFamily: 'Heebo',
                  textShadow: '0 2px 2px rgba(0,0,0,0.4)'
                }}
              >
                Trekon
              </span>
            }
            iconElementLeft={
              <IconButton onTouchTap={this.handleOpenDrawer}>
                <NavigationMenu />
              </IconButton>
            }
            style={{ position: 'fixed'}}
          />
          <NavDrawer
            open={this.state.openDrawer}
            handleClose={this.handleCloseDrawer}
            data={this.props.data}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
