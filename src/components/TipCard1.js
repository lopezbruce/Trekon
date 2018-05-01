import React from 'react';
import { Paper } from 'material-ui';
import styled from 'styled-components';

const TipCard = props => {
  //TotalAmount = TotalAmount + parseFloat({props.tips});
  return (
    <Paper className={props.className}>
      <p>Daily Tips: ${props.tips}</p>
      <p>Hours Worked: {props.hours}</p>
      <p>Hourly Average: ${props.average}/hr</p>
    </Paper>
  );
};

export default styled(TipCard)`
  padding: 10px 0;
`;
