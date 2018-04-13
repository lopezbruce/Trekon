import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import { FormsyText } from 'formsy-material-ui/lib';
import styled from 'styled-components';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../utils/constants.js';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: '',
      password: '',
      passwordCheck: '',
      firstName: '',
      LastName: '',
      canSubmit: false
    };
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handlePasswordCheck = event => {
    this.setState({ passwordCheck: event.target.value });
  };

  //Function to handle the creation of a user
  createUser = () => {
    const { firstName, lastName, email, password } = this.state;
    this.props
      .createUserMutation({
        variables: { firstName, lastName, email, password }
      })
      .then(response => {
        //Set our auth tokens to local storage for persistent sign-ins
        window.localStorage.setItem(
          GC_AUTH_TOKEN,
          response.data.signinUser.token
        );
        window.localStorage.setItem(
          GC_USER_ID,
          response.data.signinUser.user.id
        );
        //Default users to the welcome page
        this.props.history.push('/');
        window.location.reload();
      })
      .catch(e => {
        console.error(e);
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <StyledPage>
        <AppText>Trekon</AppText>
        <StyledContainer className="create-user">
          <h2>
            Reg<span className="logo-i">i</span>ster
          </h2>
          <Paper style={paperStyle} zDepth={2}>
            <Formsy.Form
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              onValidSubmit={this.createUser}
              onInvalidSubmit={this.notifyFormError}
              style={formStyle}
            >
              <FormsyText
                name="First Name"
                required
                validations="isWords"
                floatingLabelText="First Name"
                value={this.state.FirstName}
                onChange={this.handleFirstNameChange}
                validationError="Please enter a first name"
                style={inputStyle}
              />
              <FormsyText
                name="Last Name"
                required
                validations="isWords"
                floatingLabelText="Last Name"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                validationError="Please enter a valid last name"
                style={inputStyle}
              />
              <FormsyText
                name="Email"
                required
                validations="isEmail"
                floatingLabelText="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                validationError="Please enter a valid email address"
                style={inputStyle}
              />
              <FormsyText
                name="password"
                type="password"
                required
                validations="minLength:6"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                validationError="Password must be minimum 6 characters"
                autoComplete="off"
                style={inputStyle}
              />
              <FormsyText
                name="passwordCheck"
                type="password"
                required
                validations="equalsField:password"
                floatingLabelText="Confirm Password"
                value={this.state.passwordCheck}
                onChange={this.handlePasswordCheck}
                validationError="Passwords must match"
                autoComplete="off"
                style={inputStyle}
              />
              <div>
                <RaisedButton
                  style={submitStyle}
                  onTouchTap={() => this.props.history.push('/')}
                  label="Go Back"
                />
                <RaisedButton
                  style={submitStyle}
                  onTouchTap={this.createUser}
                  label="Submit"
                  primary={true}
                  disabled={!this.state.canSubmit}
                />
              </div>
            </Formsy.Form>
          </Paper>
        </StyledContainer>
      </StyledPage>
    );
  }
}

const createUserMutation = gql`
  mutation CreateUserMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

export default graphql(createUserMutation, { name: 'createUserMutation' })(
  withRouter(CreateUser)
);
