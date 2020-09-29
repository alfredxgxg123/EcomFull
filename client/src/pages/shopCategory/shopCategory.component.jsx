import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem.component.jsx'

import { selectShopCategory } from '../../redux/shop/shop.selector';

import ShopCategoryStyles from './styles';




const ShopCateogry = ({ collection }) => {
  const { title, items } = collection;
  return (
    <ShopCategoryStyles>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </div>
    </ShopCategoryStyles>
  );
};


const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(ShopCateogry);
