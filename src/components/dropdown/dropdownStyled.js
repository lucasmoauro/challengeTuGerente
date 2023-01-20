import styled from "styled-components";

export const MainContainer = styled.div`
	height: 100vh;
	width: 100%;
	background: #e2e1e1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: -1;
`;
export const Container = styled.div`
	height: 25%;
`;

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

export const DropdownContainer = styled.div`
	background: #f1f1fa;
	width: 25rem;
	max-height: 20rem;
	margin-top: 0.05rem;
	border-radius: 0 0 10px 10px;
	overflow-y: scroll;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const DropdownSpan = styled.span`
	text-align: center;
	padding: 0.5rem 0;
	width: 100%;
	border-bottom: 1px solid #d9d9d9;
	cursor: pointer;

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background: #e9e9f2;
	}
`;
