import { useRef } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoc } from "../../firebase/helpers/createDoc";
import {
	newInput,
	popUpInitialState,
	popupInput,
} from "../../store/slices/popupInputSlice";
import { toastError, toastSuccess } from "../toast/toastAlert";
import {
	Button,
	ButtonContainer,
	CTAButtonsContainer,
	Input,
	InputContainer,
	PopupBackground,
	PopupContainer,
} from "./popUpStyled";

export const PopUp = ({ setIsPopUpOpen, isPopUpOpen }) => {
	const ref = useRef();
	const dispatch = useDispatch();

	const { nombre, razon_social, nit, telefono, codigo } = useSelector(
		(state) => state.popupInputReducer
	);
	const { dropdownInput, fieldSelected } = useSelector(
		(state) => state.dropdownInputReducer
	);

	const handleInput = (e) => {
		dispatch(
			popupInput({
				fieldName: e.target.getAttribute("name"),
				fieldInput: e.target.value,
			})
		);
	};

	const popUpSubmit = async () => {
		try {
			await createDoc({ nombre, razon_social, nit, telefono, codigo }).then(
				(res) => {
					toastSuccess("Registro creado!");
					dispatch(popUpInitialState());
					setIsPopUpOpen(false);
				}
			);
		} catch (error) {
			toastError("Error al crear el registro!");
		}
	};

	const popUpCancel = () => {
		dispatch(popUpInitialState());
		setIsPopUpOpen(false);
	};
	useEffect(() => {
		dispatch(newInput({ dropdownInput, fieldSelected }));
	}, []); //eslint-disable-line

	/* El siguiente codigo permite cerrar el 
popup clickeando fuera del mismo
o mediante la tecla "Escape" */

	const closePopup = (e) => {
		if (ref.current === e.target) {
			setIsPopUpOpen(false);
			dispatch(popUpInitialState());
		}
	};
	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && isPopUpOpen) {
				dispatch(popUpInitialState());
				setIsPopUpOpen(false);
			}
		},
		[setIsPopUpOpen, isPopUpOpen] //eslint-disable-line
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<PopupBackground ref={ref} onClick={closePopup}>
			<PopupContainer className="animate__animated animate__fadeInDown">
				<InputContainer>
					<Input
						type="text"
						placeholder="Nombre"
						name="nombre"
						value={nombre}
						onChange={handleInput}
					/>

					<Input
						type="text"
						placeholder="Razon Social"
						name="razon_social"
						value={razon_social}
						onChange={handleInput}
					/>

					<Input
						type="text"
						placeholder="NIT"
						name="nit"
						value={nit}
						onChange={handleInput}
					/>

					<Input
						type="text"
						placeholder="Teléfono"
						name="telefono"
						value={telefono}
						onChange={handleInput}
					/>

					<Input
						type="text"
						placeholder="Código"
						name="codigo"
						value={codigo}
						onChange={handleInput}
					/>
				</InputContainer>

				<CTAButtonsContainer>
					<ButtonContainer padding="0 0 0 2rem">
						<Button bg="#C50000" bgactive="#ac0202" onClick={popUpCancel}>
							CANCELAR
						</Button>
					</ButtonContainer>
					<ButtonContainer padding="0 2rem 0 0">
						<Button bg="#008732" bgactive="#01752c" onClick={popUpSubmit}>
							GUARDAR
						</Button>
					</ButtonContainer>
				</CTAButtonsContainer>
			</PopupContainer>
		</PopupBackground>
	);
};
