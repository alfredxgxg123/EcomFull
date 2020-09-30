import React from 'react';
import StripeConfig from './config';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const convertPrice = price * 100;
  const pubishableKey = StripeConfig.pubishableKey;
  console.log(process.env)
  const onSuccessCallback = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label = 'Check Out'
      name = 'EconFull Shop'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount = {convertPrice}
      panelLabel ='Pay Now'
      token={onSuccessCallback}
      stripeKey={pubishableKey}
    />
  )
}

export default StripeCheckoutButton;