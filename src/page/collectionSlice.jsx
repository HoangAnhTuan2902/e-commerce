import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
	name: 'collection',
	initialState: {
		categories: [],
	},
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
	},
});
export const { setCategories } = collectionSlice.actions;
export default collectionSlice.reducer;
