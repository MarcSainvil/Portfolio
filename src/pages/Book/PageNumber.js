import styled from "styled-components";

const PageNumber = () => {
  return (
    <Container>
      <span>PAGE</span>
      <span>0</span>
    </Container>
  );
};

export default PageNumber;

const Container = styled.p`
  font-size: 0.75em;
  background-color: transparent;
  color: white;
  width: fit-content;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: right;
  & span {
    background-color: transparent;
  }
`;
