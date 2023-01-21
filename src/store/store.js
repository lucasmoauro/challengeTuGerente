import { configureStore } from "@reduxjs/toolkit";
import popupInputReducer from "./slices/popupInputSlice";
import dropdownInputReducer from "./slices/dropdownInputSlice";
import firebaseDataReducer from "./slices/firebaseDataSlice";

export const store = configureStore({
	reducer: {
		popupInputReducer,
		dropdownInputReducer,
		firebaseDataReducer
	},
});
