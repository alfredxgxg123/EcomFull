import React from 'react';
import { connect } from 'react-redux';

import { removeItem, addItem, removeItemFromCheckOut } from '../../redux/cart/cart.action';

import CheckOutItemStyle from './styles';

const CheckOutItem = ({ cartItem, removeItem, addItem, removeItemFromCheckOut }) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckOutItemStyle>
      <div className='imageColumn'>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={()=> removeItemFromCheckOut(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove_Button' onClick={()=> removeItem(cartItem)}>
        &#10005;
      </div>
    </CheckOutItemStyle>
  )
}

const mapDispatchToProps= dispatch =>({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItemFromCheckOut: item => dispatch(removeItemFromCheckOut(item)) 
})

export default connect(null, mapDispatchToProps)(CheckOutItem);