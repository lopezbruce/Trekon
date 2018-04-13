import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
    };
  }

  //handleNext = () => { };

  //handlePrev = () => { };

  render() {
    //Here we filter our data to only diplay from the month selected in the CalendarHeader Component
    //Data comes from various helper functions in tipSummaryCalculations in the utils folder

    return <div className={this.props.className}>console.log('test')</div>;
  }

export default Summary;
