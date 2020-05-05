import React from 'react';
import CollectionItemStyle from './styles';
import CustomeButton from '../custom-button/customButton.component.jsx';

const CollectionItem = ({
  id, name, price, imageUrl,
}) => (
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

    <CustomeButton inverted> Add to cart </CustomeButton>
  </CollectionItemStyle>
);

export default CollectionItem;
