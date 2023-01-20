import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdownInputData } from "../../store/slices/dropdownInputSlice";
import {
	Container,
	DropdownContainer,
	DropdownSpan,
	Input,
	MainContainer,
} from "./dropdownStyled";

export const Dropdown = ({ setIsPopUpOpen }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.dropdownInputReducer);
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const inputChange = (e) => {
		dispatch(
			dropdownInputData({
				...state,
				dropdownInput: e.target.value,
				fieldSelected: "nombre",
			})
		);
	};

	return (
		<MainContainer>
			<Container>
				<div>
					<Input
						type="text"
						onClick={() => setIsDropDownOpen(true)}
						onChange={inputChange}
					/>
				</div>
				{isDropDownOpen && (
					<DropdownContainer className="animate__animated animate__fadeIn">
						{/* PopUp */}
						<DropdownSpan onClick={() => setIsPopUpOpen(true)}>
							Agregue un nuevo registro
						</DropdownSpan>
						<DropdownSpan>Agregue un nuevo registro</DropdownSpan>
					</DropdownContainer>
				)}
			</Container>
		</MainContainer>
	);
};
