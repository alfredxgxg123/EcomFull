import React from 'react';
import CustomButtonStyle from './styles';

const CustomeButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <CustomButtonStyle className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-buttom`} {...otherProps}>
    {children}
  </CustomButtonStyle>
);

export default CustomeButton;
