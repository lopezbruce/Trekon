import React from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'Black',
    primary1Color: 'gold',
    primary2Color: 'pink',
    accent1Color: 'purple',
    pickerHeaderColor: 'red',
    alternateTextColor: 'navy'
  }
});

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
    <MuiThemeProvider muiTheme={muiTheme}>
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
    </MuiThemeProvider>
  );
};

export default styled(CalendarHeader)`
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin: 0 auto 20px auto;
  max-width: 600px;
  align-items: center;
  width: 90vw;
  padding-bottom: 20px;

  .month-name {
    font-size: 45px;
    font-family: 'Heebo';
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    .calendar-header h2 {
      font-size: 40px;
    }
    .calendar-button {
      min-width: 0 !important;
      max-width: 20vw !important;
      background-color: #000096;
      color: white;
    }
    .month-name {
      font-size: 45px;
      font-weight: bold;
    }
  }
`;
