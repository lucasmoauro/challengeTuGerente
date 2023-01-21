import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocs, nextDocuments } from "../../firebase/helpers/getDocs";
import { dropdownInputData } from "../../store/slices/dropdownInputSlice";
import {
	firebaseDataPagination,
	getAllFirebaseDocs,
} from "../../store/slices/firebaseDataSlice";
import { Spinner } from "../spinner/Spinner";
import {
	Container,
	DropdownContainer,
	DropdownSpan,
	Input,
	MainContainer,
	TitleContainer,
} from "./dropdownStyled";

export const Dropdown = ({ setIsPopUpOpen }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.dropdownInputReducer);
	const firebaseData = useSelector((state) => state.firebaseDataReducer);
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const [isFetchingData, setIsFetchingData] = useState(false);

	//Permite filtrar los datos de la DB dependiendo la parametrización seleccionada
	const filteredFirebase = firebaseData.filter((data) =>
		data[state.fieldSelected]
			.toLowerCase()
			.includes(state.dropdownInput.toLowerCase())
	);

	const inputChange = (e) => {
		//Al modificar "fieldSelected" permite cambiar la parametrizacion del objeto
		dispatch(
			dropdownInputData({
				...state,
				dropdownInput: e.target.value,
				fieldSelected: "nombre",
			})
		);
	};

	const handleScroll = (event) => {
		if (
			event.target.scrollHeight - event.target.scrollTop <=
			event.target.clientHeight + 50
		) {
			setIsFetchingData(true);
			setTimeout(() => {
				nextDocuments(state.fieldSelected)
					.then((res) => {
						setIsFetchingData(false);
						dispatch(firebaseDataPagination(res));
					})
					.catch((err) => {
						setIsFetchingData(false);
					});
			}, 1500);
		}
	};
	useEffect(() => {
		// Esta fn trae todos los registros de la DB
		getAllDocs(state.fieldSelected).then((res) => {
			dispatch(getAllFirebaseDocs(res));
		});
	}, []); //eslint-disable-line

	return (
		<MainContainer>
			<TitleContainer>
				<h1>tuGerente Challenge</h1>
			</TitleContainer>
			<Container>
				<div>
					<Input
						type="text"
						onClick={() => setIsDropDownOpen(true)}
						onChange={inputChange}
					/>
				</div>
				{isDropDownOpen && (
					<DropdownContainer
						className="animate__animated animate__fadeIn"
						onScroll={handleScroll}
					>
						{/* PopUp */}
						<DropdownSpan onClick={() => setIsPopUpOpen(true)}>
							Agregue un nuevo registro
						</DropdownSpan>

						{/* Lista */}
						{filteredFirebase.map((data, i) => (
							<DropdownSpan key={i}>{data[state.fieldSelected]}</DropdownSpan>
						))}
						{/* Spinner de carga */}
						{isFetchingData && (
							<DropdownSpan>
								<Spinner />
							</DropdownSpan>
						)}
					</DropdownContainer>
				)}
			</Container>
		</MainContainer>
	);
};
