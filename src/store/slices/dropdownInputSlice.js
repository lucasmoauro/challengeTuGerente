import { createSlice } from "@reduxjs/toolkit";

// El estado inicial de la parametrizacion es "nombre"
const initialState = {
	dropdownInput: "",
	fieldSelected: "nombre",
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
