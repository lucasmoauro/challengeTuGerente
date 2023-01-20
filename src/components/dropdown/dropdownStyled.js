import styled from "styled-components";

export const MainContainer = styled.div`
	height: 100vh;
	width: 100%;
	background: #e2e1e1;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: -1;
`;

export const InputDivContainer = styled.div``;

export const Input = styled.input`
	background: #f1f1fa;
	border: none;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 25rem;
	height: 3rem;
	font-size: 20px;
	padding: 1rem;
	transition: box-shadow 150ms ease-in-out;

	&:focus {
		outline: none;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

		transition: box-shadow 150ms ease-in-out;
	}
`;

