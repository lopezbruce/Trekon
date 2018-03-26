import React, { Component } from 'react';

class SideChart extends Component {
  render() {
    return (
      <ul class="list-group">
      <li class="list-group-item"><h4>Today's Stats</h4></li>
      <li class="list-group-item"><img src='/donut-chart.png 'classNme="Profile-image" alt="Donut Image" width="225px"/></li>
      </ul>
    );
  }
}

export default SideChart;
