import React  from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CollectionItemStyle from './styles';
import CustomeButton from '../custom-button/customButton.component.jsx';


const CollectionItem = ({
  item, addItem
}) => {
  const { id, name, price, imageUrl } = item;
  return (
    <CollectionItemStyle>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomeButton onClick={() => addItem(item)}inverted> 
        Add to cart 
      </CustomeButton>
    </CollectionItemStyle>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
