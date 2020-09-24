import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/preview/collectionPreview.component.jsx';

import { selectShopItems } from '../../redux/shop/shop.selector';


const Shopage = ({ showPageData }) => {
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

const mapStateToProps = createStructuredSelector({
  showPageData: selectShopItems
})

export default connect(mapStateToProps)(Shopage);
