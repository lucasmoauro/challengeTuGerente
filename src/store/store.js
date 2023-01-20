import { configureStore } from "@reduxjs/toolkit";
import popupInputReducer from "./slices/popupInputSlice";
import dropdownInputReducer from "./slices/dropdownInputSlice";

export const store = configureStore({
	reducer: {
		popupInputReducer,
		dropdownInputReducer,
	},
});
