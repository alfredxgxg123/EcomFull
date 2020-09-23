import { createSelector } from 'reselect';

//get the whole reducer state and return a piece of it
// cartIcon mapstateToprps will pass to here 
const selectCart = state => state.cart;
 
//return cartitem property
export const selectCartItems = createSelector(
  //input array
  [selectCart],
  //function to return part of it
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)