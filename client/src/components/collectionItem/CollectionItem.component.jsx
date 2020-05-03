import React from 'react';
import CollectionItemStyle from './styles';


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
  </CollectionItemStyle>
);

export default CollectionItem;
