import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root{
		--bg: #8B5A2B;
		--primary: white;
		--interactable: #4CAF50;
		--shadow-color: 0deg 0% 25%;
	}
	body {
		min-height: 100dvh;
		font-size: 1.5rem;
	}
	* {
		margin: 0;
		padding: 0;
		background: var(--bg);
		color: var(--primary);
		text-align: center;
	}
	button, a {
		color: var(--interactable);
	}
`;

export default GlobalStyles;
