import { createSlice } from '@reduxjs/toolkit';

type stateType = {
	total: number;
	cartItems: { item: string; price: number }[];
};

const initialState: stateType = {
	total: 0,
	cartItems: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCartAction: (state, action) => {
			state.cartItems = action.payload.cartItems;
			state.total = action.payload.total;
		},
	},
});

const { addToCartAction } = cartSlice.actions;
export const addToCart = (data: { cartItems: never[]; total: number; }) => (dispatch) => {
	return dispatch(addToCartAction(data));
};

export default cartSlice.reducer;
