import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview.component/collections-overview.component.jsx';
import ShopCateory from '../shopCategory/shopCategory.component.jsx'

const Shopage = ({ match }) => {

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={ShopCateory}/>
    </div>
  );
};


export default Shopage;
