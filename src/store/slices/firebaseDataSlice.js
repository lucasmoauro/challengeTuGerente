import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const firebaseDataSlice = createSlice({
	name: "firebaseData",
	initialState,
	reducers: {
		getAllFirebaseDocs(state, action) {
			state.push(...action.payload);
		},
		firebaseDataPagination(state, action) {
			return (state = [...state, ...action.payload]);
		},
	},
});

export const { getAllFirebaseDocs, firebaseDataPagination } =
	firebaseDataSlice.actions;
export default firebaseDataSlice.reducer;
