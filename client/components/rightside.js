import React, { Component } from 'react';
import TopServer from './top_server';
import NumberGuest from './number_guest';
import TablesBooked from './tables_booked';


class RightSide extends Component {
  render() {
    return (
      <div>
      <TopServer />
      <TablesBooked />
      <NumberGuest />
      </div>

    );
  }
}
export default RightSide;
