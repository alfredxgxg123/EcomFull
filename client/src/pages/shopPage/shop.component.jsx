import React, { useState } from 'react';
import showPageData from './dummyData.js';
import CollectionPreview from '../../components/preview/collectionPreview.component.jsx';

const Shopage = (props) => {
  const [collection, setCollection] = useState(
    [showPageData],
  );
  return (
    <div>
      {
        showPageData.map(({ id, ...otherShowPageData }) => (
          <CollectionPreview key={id} {...otherShowPageData} />
        ))
      }
    </div>
  );
};

export default Shopage;
