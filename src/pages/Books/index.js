import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import styled from "styled-components";

const Books = ({ books }) => {
  return (
    <Container>
			<nav>
			<Link to="/">Go Back</Link>
			</nav>
      <header>
        <h2>🐝 Join a Tiny Tale! 🐝</h2>
      </header>
      <section>
        {books.map((book) => (
          <BookCard key={book._id} bookDetails={book} />
        ))}
      </section>
    </Container>
  );
};

export default Books;

const Container = styled.div`
  padding-top: 5vh;
	& header {
		margin: 5vh 0;
	}
  & section {
    display: grid;
		justify-items: center;
    margin:auto;
		width: fit-content;
    grid-template-columns: 1fr;
    grid-gap: 25px;
		@media only screen and (min-width: 600px) {
			grid-template-columns: 1fr 1fr;
		}
		@media only screen and (min-width: 900px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
  }
`;
