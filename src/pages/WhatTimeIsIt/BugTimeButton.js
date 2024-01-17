import styled from "styled-components";

const BugTimeButton = ({ value, setter }) => {
  return (
    <BugToggle
      $isOn={value}
      onClick={() => {
        setter(!value);
      }}
    >
      🐝
    </BugToggle>
  );
};

export default BugTimeButton;

const BugToggle = styled.button`
  min-height: 6rem;
	min-width: 6rem;
	padding: .5em;
	font-size: 2rem;
	box-sizing: border-box;
  border-width: 0.25em;
  border-style: solid;
  border-color: ${({ $isOn }) => ($isOn ? "lime" : "red")};
	border-radius: ${({ $isOn }) => ($isOn ? "50%" : "0")};
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	position: relative;
  &::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left:0;
		transition: background-color 0.5s ease-in-out ${({ $isOn }) => $isOn ? "0":"0.5s"};
		background-color: ${({ $isOn }) => $isOn ? "transparent":"rgba(255, 0, 0, 0.5)"};
  }
`;
