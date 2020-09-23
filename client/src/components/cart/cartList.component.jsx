import React from 'react';
import { connect } from 'react-redux';

import CustomeButton from '../custom-button/customButton.component.jsx';
import CartListStyle from './styles';
import CartItem from '../cartItem/cartItem.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartList = ({ cartItems }) => (
  <CartListStyle>
      <div className="cartItems">
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))
        }
      </div>
      <CustomeButton>GO TO CHECKOUT</CustomeButton>
  </CartListStyle>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartList);