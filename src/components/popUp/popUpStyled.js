import styled from "styled-components";

export const PopupBackground = styled.div`
	background: rgb(0, 0, 0, 0.5);
	position: fixed;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const PopupContainer = styled.div`
	background: #ebebeb;
	width: 36rem;
	height: 18rem;
	border-radius: 10px;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;
export const InputContainer = styled.div`
	height: 70%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	margin-top: 2rem;
	padding: 1rem;

	border: none;

	height: 3rem;
	width: 25rem;

	font-size: 20px;

	border-radius: 10px;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);

	transition: box-shadow 150ms ease-in-out;
	&:focus {
		outline: none;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
		transition: box-shadow 150ms ease-in-out;
	}
`;

export const CTAButtonsContainer = styled.div`
	height: 30%;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	width: 50%;
	display: inherit;
	justify-content: center;
	padding: ${(props) => props.padding};
`;

export const Button = styled.button`
	background: ${(props) => props.bg};
	width: 10rem;
	height: 3rem;
	border: none;
	border-radius: 10px;
	color: #fafafa;
	cursor: pointer;
	font-size: 16px;

	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

	&:active {
		background: ${(props) => props.bgactive};
	}
`;
