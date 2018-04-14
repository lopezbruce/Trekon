import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import { FormsyText } from 'formsy-material-ui/lib';
import styled from 'styled-components';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../utils/constants.js';

class SignInUser extends Component {
  render() {
    const styles = {
      paperStyle: {
        width: '300px',
        margin: '0 auto',
        marginBottom: '30px',
        paddingBottom: '10px',
        overflow: 'hidden'
      },
      inputStyle: {
        margin: 'auto'
      },
      submitStyle: {
        margin: '20px auto',
        marginRight: '10px',
        marginLeft: '5px'
      },
      formStyle: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto'
      }
    };

    const { paperStyle, inputStyle, submitStyle, formStyle } = styles;

    return (
      <StyledPage>
        <AppText>
          Trekon
        </AppText>
        <StyledContainer />
      </StyledPage>
    );
  }
}

const StyledContainer = styled.div`
  padding-top: 7vh;
  background-color: #c4c4c4;
  color: white;
  margin: 0 auto;
`;

const StyledPage = styled.div`
  height: 100vh;
  max-height: 110vh
  width: 100vw;
  background-color: #c4c4c4;
  margin: 0 auto;

  .logo-i {
    color: rgb(0, 188, 212);
    position: relative;
  }

  .logo-i:before {
    content: "ı";
    position: absolute;
    color: white;
  }

`;

const AppText = styled.h2`
  margin: 0 auto;
  padding-top: 40vh;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 90px;
`;

export default withRouter(SignInUser);
