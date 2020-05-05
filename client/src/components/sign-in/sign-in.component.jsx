import React, { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import SignInStyle from './styles';
import CustomeButton from '../custom-button/customButton.component.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase';

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });
  const { email, password } = signIn;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignIn({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignIn((prestate) => ({
      ...prestate,
      [name]: value,
    }));
  };

  return (
    <SignInStyle>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" label="email" value={email} handleChange={handleChange} required />
        <FormInput name="password" type="password" label="password" value={password} handleChange={handleChange} required />
        <div className="buttons">
          <CustomeButton type="submit" type="button"> Sign In </CustomeButton>
          <CustomeButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomeButton>
        </div>
      </form>
    </SignInStyle>
  );
};

export default SignIn;
