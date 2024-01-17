import styled from "styled-components";

const Page = ({ pageArray, colors, pageNumber }) => {
  return (
    <PageContainer id={`page-${pageNumber}`} $pageNumber={pageNumber}>
      {pageArray.map((text, index) => {
        const isOddNumbered = index % 2 === 1;
        return (
          <Line
            key={text}
            $odd={isOddNumbered}
            $color={isOddNumbered ? colors.text1 : colors.text2}
          >
            {text}
          </Line>
        );
      })}
    </PageContainer>
  );
};

export default Page;

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
	box-sizing: border-box;
  padding: 2rem;
  min-height: 100dvh;
  filter: hue-rotate(${({ $pageNumber }) => $pageNumber * -25}deg);
`;

const Line = styled.p`
  width: fit-content;
  padding: ${({ $odd }) => ($odd ? "0 0 1rem 1rem" : "0 1rem 1rem 0")};
  color: ${({ $color }) => $color};
`;
