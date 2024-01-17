import { Link } from "react-router-dom";
import styled from "styled-components";

const BookCard = ({ bookDetails }) => {
  const { colors, _id, title, teaser } = bookDetails;
  
  return (
    <CardContainer $colors={colors} to={`/book/${_id}`}>
			<h3>{title}</h3>
      <p>{teaser}</p>
    </CardContainer>
  );
};

export default BookCard;

const CardContainer = styled(Link)`
	text-decoration: none;
  width: fit-content;
  padding: 15px;
  border-radius: 15px;
  max-width: 250px;
  background-color: ${({ $colors }) => $colors.bg};
	color: ${({ $colors }) => $colors.accent};

  box-shadow: 0.7px 0.6px 1px hsl(var(--shadow-color) / 0.55),
    2.6px 2.5px 4.1px -0.8px hsl(var(--shadow-color) / 0.55),
    6.7px 6.5px 10.5px -1.7px hsl(var(--shadow-color) / 0.55),
    16.6px 16.2px 26.1px -2.5px hsl(var(--shadow-color) / 0.55);
		/* https://www.joshwcomeau.com/shadow-palette/ */

	cursor: pointer;
	transition: scale 0.3s ease-in-out;
	&:hover {
		scale: 1.05;
	}
	&:active {
		* {
			scale: 0.9;
		}
	}
	& * {
		transition: scale 0.3s ease-in-out;
		padding: .5rem 0;
		background-color: inherit;
		color: inherit;
	}
	& p {
		color: ${({ $colors }) => $colors.text1};
	}
`;
