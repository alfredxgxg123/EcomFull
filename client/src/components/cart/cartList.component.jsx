import React from 'react';

import CustomeButton from '../custom-button/customButton.component.jsx';
import CartListStyle from './styles';

const CartList = () => (
  <CartListStyle>
      <div className="cartItems"></div>
      <CustomeButton>GO TO CHECKOUT</CustomeButton>
  </CartListStyle>
)

export default CartList;