import React, { Component } from 'react';
import SideMenu from './side_menu'
import SideChart from './side_chart'

class LeftSide extends Component {
  render() {
    return (
      <div>
      <SideMenu />
      <SideChart />
      </div>

    );
  }
}

export default LeftSide;
