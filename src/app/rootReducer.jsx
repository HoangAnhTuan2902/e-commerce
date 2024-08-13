import { combineReducers } from '@reduxjs/toolkit';
import productSlice from '~/components/Product/productSlice';

const rootReducer = combineReducers({
	product: productSlice,
});

export default rootReducer;
