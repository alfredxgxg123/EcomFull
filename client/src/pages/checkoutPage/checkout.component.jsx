import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckOutItem from '../../components/checkoutItem/checkoutItem.component.jsx';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripeCheckoutButton/stripeCheckoutButton.component.jsx';

import CheckOutPageStyle from './styles';

const CheckoutPage = ({cartItems, total}) => (
  <CheckOutPageStyle>
    <div className='header'>
      <div className='column'>
        <span>Product</span>
      </div>
      <div className='column'>
        <span>Description</span>
      </div>
      <div className='column'>
        <span>Quantity</span>
      </div>
      <div className='column'>
        <span>Price</span>
      </div>
      <div className='column'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => 
        <CheckOutItem cartItem={cartItem} key={cartItem.id}/>   
      )
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
    <div className='testing'>
      Testing Card number can be found here <a href="https://stripe.com/docs/testing#cards">Strip link</a>
      <br />
      Exp: 12/99 - CVV:111
    </div>
    <StripeCheckoutButton price={total}/>
  </CheckOutPageStyle>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);