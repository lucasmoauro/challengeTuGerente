import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	nombre: "",
	razon_social: "",
	nit: "",
	telefono: "",
	codigo: "",
};

const popupInputSlice = createSlice({
	name: "popupInput",
	initialState,
	reducers: {
		newInput(state, action) {
			switch (action.payload.fieldSelected.toLowerCase()) {
				case "nombre":
					return {
						...state,
						nombre: action.payload.dropdownInput,
					};
				case "razon_social":
					return {
						...state,
						razon_social: action.payload.dropdownInput,
					};
				case "nit":
					return {
						...state,
						nit: action.payload.dropdownInput,
					};
				case "telefono":
					return {
						...state,
						telefono: action.payload.dropdownInput,
					};
				case "codigo":
					return {
						...state,
						codigo: action.payload.dropdownInput,
					};

				default:
					return state;
			}
		},
		popupInput(state, action) {
			return {
				...state,
				[action.payload.fieldName]: action.payload.fieldInput,
			};
		},
	},
});

export const { newInput, popupInput } = popupInputSlice.actions;
export default popupInputSlice.reducer;
