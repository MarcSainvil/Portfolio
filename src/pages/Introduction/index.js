import { Link } from "react-router-dom";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Container>
      <header>
        <h2>🐝 Welcome to Tiny Time Tales 🐝</h2>
      </header>
      <p>🐛 We believe that no critter is too small to have their own adventure! 🐛</p>
      <p>🐞 Won't you join us for story time? 🐞</p>
      <Link to="/books">It's Tale time!</Link>
      <footer>
        <p>
					🦋 What <Link to="/time">time</Link> is it? 🦋
        </p>
      </footer>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin: 1em auto;
  }
`;
