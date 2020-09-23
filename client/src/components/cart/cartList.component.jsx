import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import CustomeButton from '../custom-button/customButton.component.jsx';
import CartListStyle from './styles';
import CartItem from '../cartItem/cartItem.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartList = ({ cartItems, history, dispatch }) => (
  <CartListStyle>
      <div className="cartItems">
        {
          cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))
          :
          <span className='empty'>Your cart is empty</span>
        }
      </div>
      <CustomeButton 
        onClick={ () => { 
          history.push('/checkout'); 
          dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomeButton>
  </CartListStyle>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartList));