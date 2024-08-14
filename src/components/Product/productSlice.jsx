import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

// Tạo slice cho sản phẩm
const productSlice = createSlice({
	name: 'product',
	initialState: {
		selectedOption: null,
		isStockFilter: false,
		inputValueMinFilter: 0,
		inputValueMaxFilter: 0,
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
			// Đảm bảo giá trị tối thiểu là 90 hoặc giá trị cao hơn
			const newMax = action.payload < 90 ? 90 : action.payload;
			if (state.inputValueMaxFilter > newMax) {
				state.inputValueMaxFilter = newMax;
			} else {
				state.inputValueMaxFilter = newMax;
			}
		},
		setMaxPrice: (state, action) => {
			state.maxPrice = action.payload;
			// Cập nhật inputValueMaxFilter với giá trị maxPrice
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
