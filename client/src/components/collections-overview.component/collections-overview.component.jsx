import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverviewStyle from './styles';
import CollectionPreview from '../preview/collectionPreview.component.jsx';

import { selectOverViewForShopItems } from '../../redux/shop/shop.selector';



const CollectionOverview = ({ showPageData }) => (
  <CollectionOverviewStyle>
      {
        showPageData.map(({ id, ...otherShowPageData }) => (
          <CollectionPreview key={id} {...otherShowPageData} />
        ))
      }
  </CollectionOverviewStyle>
);

const mapStateToProps = createStructuredSelector({
  showPageData: selectOverViewForShopItems
})

export default connect(mapStateToProps)(CollectionOverview);