import React, { Component } from 'react';
import { DatePicker } from 'material-ui';

class Calendar extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      //fill data
    };
  }

  handleOpenDatePicker = () => {
    this.refs.dp.focus();
  };

  handlePickerChange = (event, date) => {
    this.setState({
      //fill data
    });
  };

  //handleNext = () => { };

  //handlePrev = () => { };

  render() {
    // add constants
    );
    return (
      //Create return
    );
  }
}
