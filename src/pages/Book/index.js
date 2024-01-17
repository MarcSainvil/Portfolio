import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import PageNumber from "./PageNumber";
import Page from "./Page";

const Book = ({ books }) => {
  const { bookId } = useParams();
  const foundBook = books.find((book) => book._id === bookId);

  return (
    <Container>
      <Link to="/books">Back to the Tales</Link>
      {foundBook ? (
        <>
          <FoundBook $colors={foundBook?.colors}>
            <PageNumber />
            <h1>{foundBook.title}</h1>
            {foundBook.pages.map((pageArray, index) => {
              return (
                <Page
                  pageNumber={index + 1}
                  pageArray={pageArray}
                  colors={foundBook.colors}
                  key={index}
                />
              );
            })}
          </FoundBook>
          <Link to="/books">Back to the Tales</Link>
        </>
      ) : (
        <p>Sorry, we couldn't find that tale.</p>
      )}
    </Container>
  );
};

export default Book;

const Container = styled.div`
  padding: 5vh 0;
`;

const FoundBook = styled.article`
  position: relative;
  margin: 2rem auto;
  width: fit-content;
  background-color: ${({ $colors }) => $colors.bg};
  & h1 {
    filter: hue-rotate(-20deg);
    color: ${({ $colors }) => $colors.accent};
    padding: 2rem;
  }
  & * {
    background-color: inherit;
  }
	& > p {
    background-color: transparent;
  }
  font-size: 2rem;
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 900px) {
    font-size: 4rem;
  }
`;
