import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import RegistrationStyle from './styles.js';

const Registration = () => (
  <RegistrationStyle>
    <SignIn />
    <SignUp />
  </RegistrationStyle>
);

export default Registration;
