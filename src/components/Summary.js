import React, { Component } from 'react';
import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';
import getStatistics from '../utils/tipCalculations';
import suffixer from '../utils/suffixer';
import ScrollAnimation from 'react-animate-on-scroll';

class Summary extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth()
    };
  }

  handleNext = () => {
    if (this.state.month === 11) {
      this.setState(prevState => ({
        month: 0,
        year: prevState.year + 1
      }));
    } else {
      this.setState(prevState => ({
        month: prevState.month + 1
      }));
    }
  };

  handlePrev = () => {
    if (this.state.month === 0) {
      this.setState(prevState => ({
        month: 11,
        year: prevState.year - 1
      }));
    } else {
      this.setState(prevState => ({
        month: prevState.month - 1
      }));
    }
  };

  render() {
    //Here we filter our data to only diplay from the month selected in the CalendarHeader Component
    //Data comes from various helper functions in tipSummaryCalculations in the utils folder
    const filteredTipsByMonth = this.props.data.User.tips.filter(
      data => data.month === this.state.month && data.year === this.state.year
    );
    const summaryData = getStatistics(filteredTipsByMonth);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return (
      <div className={this.props.className}>
        <CalendarHeader
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          year={this.state.year}
          month={this.state.month}
        />
      </div>
    );
  }
}

export default styled(Summary);
