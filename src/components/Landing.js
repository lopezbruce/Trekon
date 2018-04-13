import React from 'react';
import styled from 'styled-components';
import Background from '../assets/landing-photo.jpeg';
import { Link, withRouter } from 'react-router-dom';

const Landing = props => {
  return (

      <ImageContainer />
      <Content>
        <div className="text">Welcome to</div>
        <div className="logo">Trekon</div>
        <div>
          <p>
            The world's best cloud-based t<span className="logo-i">i</span>p
            track<span className="logo-i">i</span>ng app.
          </p>
          <Button onClick={() => props.history.push('/CreateUser')}>
            <p>Sign up for free!</p>
          </Button>
          <p>
            Already have an account?{' '}
            <span>
              <StyledLink to="/SignInUser">Log In.</StyledLink>
            </span>
          </p>
        </div>
      </Content>
  );
};

export default withRouter(Landing);
