import { combineReducers } from '@reduxjs/toolkit';
import productSlice from '~/components/Product/productSlice';
import collectionSlice from '~/page/collectionSlice';

const rootReducer = combineReducers({
	product: productSlice,
	collection: collectionSlice,
});

export default rootReducer;
