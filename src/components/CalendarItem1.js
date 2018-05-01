import React, { Component } from 'react';
import { Paper, FlatButton } from 'material-ui';
import styled from 'styled-components';
import NewTipInputForm from './NewTipInputForm1';
import UpdateTipInputForm from './UpdateTipInputForm1';
import { graphql, gql } from 'react-apollo';
import DeleteAlert from './DeleteAlert';
import TipCard from './TipCard1';

class CalendarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      monthNames: [
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
      ],
      showDialog: false,
      startingDay: this.props.date + 1,
      tipData: this.props.tipData,
      showInputForm: false,
      showDelete: false
    };
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  };

  handleOpen = () => {
    this.setState({ showDialog: true });
  };

  showInputForm = () => {
    this.setState({ showInputForm: true });
  };

  hideInputForm = () => {
    this.setState({ showInputForm: false });
  };

  handleDelete = () => {
    if (!this.state.tipData) {
      return null;
    }
    const id = this.state.tipData.id;
    this.props.deleteMutation({ variables: { id } }).then(() => {
      window.location.reload();
    });
  };

  handleOpenDelete = () => {
    this.setState({ showDelete: true });
  };

  getFullDate = () => {
    const day = (this.props.date + this.state.startingDay - 1) % 7;
    return `${this.state.dayNames[day]} ${
      this.state.monthNames[this.props.month]
    } ${this.props.date}, ${this.props.year}`;
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.startingDay !== nextProps.startingDay) {
      this.setState({
        startingDay: nextProps.startingDay,
        showDialog: nextProps.forceShowDialog,
        tipData: nextProps.tipData
      });
    }
  }
  render() {
    const day = (this.props.date + this.state.startingDay - 1) % 7;
    const dayName = this.state.dayNames[day];

    if (this.props.loading) {
      return <div>LOADING</div>;
    }
    const actions = [
      <FlatButton
        label="Delete"
        primary={true}
        onTouchTap={this.handleOpenDelete}
      />,
      <FlatButton label="ADD" primary={true} onTouchTap={this.showInputForm} />,
      <FlatButton label="Exit" primary={true} onTouchTap={this.handleClose} />
    ];

    const date = this.getFullDate();

    return (
      <CalendarItemContainer className="">
        <Paper
          title={date}
          actions={actions}
          modal={false}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: '100%',
            maxWidth: '500px',
            height: '80%'
          }}
        >
          {!!this.state.tipData ? (
            <span>
              <TipCard
                tips={this.state.tipData.tipAmount}
                hours={this.state.tipData.hoursWorked}
                average={Math.round(
                  this.state.tipData.tipAmount / this.state.tipData.hoursWorked
                )}
                notes={this.state.tipData.notes}
              />
              <DeleteAlert
                open={this.state.showDelete}
                handleDelete={this.handleDelete}
              />
            </span>
          ) : (
            <h3>Day Off :) or you haven't receive any tip yet :(</h3>
          )}
          {!this.state.tipData ? (
            <Paper
              modal={false}
              autoDetectWindowHeight={true}
              repositionOnUpdate={false}
              contentStyle={{
                width: '90vw',
                maxWidth: '500px',
                transform: 'none'
              }}
              bodyStyle={{ padding: '0' }}
            >
              <NewTipInputForm
                hideInputForm={this.hideInputForm}
                year={this.props.year}
                month={this.props.month}
                day={this.props.date}
                userId={this.props.user}
                dayName={dayName}
              />
            </Paper>
          ) : (
            <Paper
              modal={false}
              autoDetectWindowHeight={true}
              repositionOnUpdate={false}
              contentStyle={{
                width: '90vw',
                maxWidth: '500px',
                transform: 'none'
              }}
              bodyStyle={{ padding: '0' }}
            >
              <UpdateTipInputForm
                hideInputForm={this.hideInputForm}
                year={this.props.year}
                month={this.props.month}
                day={this.props.date}
                id={this.state.tipData.id}
                totalAmount={this.state.tipData.tipAmount}
                tipAmount={
                  this.state.tipData.tipAmount + this.state.tipData.tipAmount
                }
                hoursWorked={this.state.tipData.hoursWorked}
              />
            </Paper>
          )}
        </Paper>
      </CalendarItemContainer>
    );
  }
}

// ----------------- Styles --------------------------------

const CalendarItemContainer = styled.div`
  width: 50.33vw;
  height: 31vw;
  max-width: 414px;
  max-height: autopx;
  border-top: 1px #bdbdbd solid;
  border-left: 1px #bdbdbd solid;
  display: inline-block;
  overflow: hidden;

  &:nth-last-child(-n + 7) {
    border-bottom: 1px #bdbdbd solid;
  }
  &:nth-child(7n) {
    border-right: 1px #bdbdbd solid;
  }

  &:last-child {
    border-right: 1px #bdbdbd solid;
  }

  &:hover {
    background-color: #e0e0e0;
    transition: 0.2s ease;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

//--------------------------------------

const deleteMutation = gql`
  mutation deleteTip($id: ID!) {
    deleteTip(id: $id) {
      id
    }
  }
`;

export default graphql(deleteMutation, { name: 'deleteMutation' })(
  CalendarItem
);
