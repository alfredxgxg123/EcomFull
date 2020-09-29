import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../collectionItem/CollectionItem.component.jsx';
import CollectionPreviewStyle from './styles';


const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyle>
    <h1 className="title"><a href={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</a></h1>
    <div className="preview">
      {
      items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </CollectionPreviewStyle>
);

export default CollectionPreview;
