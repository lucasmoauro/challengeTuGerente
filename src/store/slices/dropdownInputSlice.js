import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dropdownInput: "",
	fieldSelected: "",
};

const dropdownInputSlice = createSlice({
	name: "dropdownInput",
	initialState,
	reducers: {
		dropdownInputData(state, action) {
			return {
				...state,
				dropdownInput: action.payload.dropdownInput,
				fieldSelected: action.payload.fieldSelected,
			};
		},
	},
});

export const { dropdownInputData } = dropdownInputSlice.actions;
export default dropdownInputSlice.reducer;
