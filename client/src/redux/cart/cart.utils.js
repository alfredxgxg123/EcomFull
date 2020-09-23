export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exist_Item = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(exist_Item) {
    return cartItems.map(cartItem  => 
      cartItem.id === cartItemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem   
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
} 

export const removeItemFromCheckOut = (cartItems, itemToRemove) => {
  const exist_Item = cartItems.find(
    cartItem => cartItem.id == itemToRemove.id
  )

  if(exist_Item.quantity == 1) {
    return cartItems.filter(cartItem => cartItem.id != itemToRemove.id)
  } 

  return cartItems.map( cartItem => 
    cartItem.id === itemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem   
  )
}