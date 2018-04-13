import React from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';

const monthNamesFull = [
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

const CalendarHeader = props => {
  return (
    <div className={props.className}>
      <RaisedButton
        label="&larr;"
        onTouchTap={props.handlePrev}
        primary={true}
        className="calendar-button"
      />
      <div onTouchTap={props.handleOpenDatePicker} className="month-name">
        {monthNamesFull[props.month]} {props.year}
      </div>
      <RaisedButton
        label="&rarr;"
        onTouchTap={props.handleNext}
        primary={true}
        className="calendar-button"
      />
    </div>
  );
};

export default styled(CalendarHeader);
//Missing styling;
