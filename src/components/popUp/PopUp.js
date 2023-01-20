import { useRef } from "react";
import { useCallback, useEffect } from "react";
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

	const closePopup = (e) => {
		if (ref.current === e.target) {
			setIsPopUpOpen(false);
		}
	};
	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && isPopUpOpen) {
				setIsPopUpOpen(false);
			}
		},
		[setIsPopUpOpen, isPopUpOpen]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<PopupBackground ref={ref} onClick={closePopup}>
			<PopupContainer className="animate__animated animate__fadeInDown">
				<InputContainer>
					<Input type="text" />
				</InputContainer>

				<CTAButtonsContainer>
					<ButtonContainer padding="0 0 0 2rem">
						<Button bg="#C50000" bgactive="#ac0202" onClick={() => setIsPopUpOpen(false)}>
							CANCELAR
						</Button>
					</ButtonContainer>
					<ButtonContainer padding="0 2rem 0 0">
						<Button bg="#008732" bgactive="#01752c">
							GUARDAR
						</Button>
					</ButtonContainer>
				</CTAButtonsContainer>
			</PopupContainer>
		</PopupBackground>
	);
};
