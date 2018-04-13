import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, MenuItem, Divider } from 'material-ui';

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.open !== nextProps.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => this.setState({ open })}
      >
        <div
          style={{
            height: '45px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          Welcome Name
        </div>
    );
  }
}

export default withRouter(NavDrawer);
