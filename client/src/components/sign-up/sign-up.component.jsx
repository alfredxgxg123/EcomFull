import React, { useEffect, useState } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomeButton from '../custom-button/customButton.component.jsx';

import { auth, createUserProfileDocument } from '../../firebase/firebase';

import SignUpStyle from './styles.js';

const SignUp = () => {
  const [signup, setSignup] = useState({
    displayName: '',
    email: '',
    password: '',
    comfirmPassword: '',
  });
  const {
    displayName, email, password, comfirmPassword,
  } = signup;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== comfirmPassword) {
      alert("passwords don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      // store into database with user email and password and also displayname
      await createUserProfileDocument(user, { displayName });
      // reset state
      setSignup({
        displayName: '',
        email: '',
        password: '',
        comfirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <SignUpStyle>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="comfirmPassword"
          value={comfirmPassword}
          onChange={handleChange}
          label="Comfirm Password"
        />

        <CustomeButton type="submit" type="button">SIGN UP</CustomeButton>
      </form>
    </SignUpStyle>
  );
};

export default SignUp;
