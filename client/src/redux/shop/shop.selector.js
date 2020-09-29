import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.showPageData
); 


export const selectOverViewForShopItems = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectShopCategory = memoize(urlParam => (
  createSelector(
    [selectShopItems],
    collections => collections[urlParam]
  )
));