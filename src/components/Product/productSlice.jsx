import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

// Đổi tên action và state
const productSlice = createSlice({
	name: 'product',
	initialState: {
		selectedOption: null,
		isStockFilter: false,
		inputValueMinFilter: 0,
		inputValueMaxFilter: null,
		maxPrice: null,
	},
	reducers: {
		setSelectedOption: (state, action) => {
			state.selectedOption = action.payload;
		},
		setIsStockFilter: (state, action) => {
			state.isStockFilter = action.payload;
		},
		setInputValueMinFilter: (state, action) => {
			state.inputValueMinFilter = _.isNil(action.payload) ? 0 : action.payload;
		},
		setInputValueMaxFilter: (state, action) => {
			const newMax = action.payload < 90 ? 90 : action.payload;
			if (state.inputValueMinFilter > newMax) {
				state.inputValueMinFilter = newMax;
			}
			state.inputValueMaxFilter = newMax;
		},
		setMaxPrice: (state, action) => {
			state.maxPrice = action.payload;
			state.inputValueMaxFilter = action.payload;
		},
	},
});

export const {
	setSelectedOption,
	setIsStockFilter,
	setInputValueMinFilter,
	setInputValueMaxFilter,
	setMaxPrice,
} = productSlice.actions;
export default productSlice.reducer;
