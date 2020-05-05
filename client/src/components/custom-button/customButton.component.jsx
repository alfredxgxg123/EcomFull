import React from 'react';
import CustomButtonStyle from './styles';

const CustomeButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
  <CustomButtonStyle className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    {children}
  </CustomButtonStyle>
);

export default CustomeButton;
