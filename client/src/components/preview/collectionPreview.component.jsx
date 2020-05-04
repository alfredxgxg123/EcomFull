import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../collectionItem/CollectionItem.component.jsx';
import CollectionPreviewStyle from './styles';


const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyle>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
      items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </CollectionPreviewStyle>
);

export default CollectionPreview;
