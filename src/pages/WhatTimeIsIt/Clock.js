import styled from "styled-components";

const Clock = ({ hour, minute, second }) => {
  const secondAngle = second * 6;
  const minuteAngle = minute * 6 + second * 0.1;
  const hourAngle = hour * 30 + minute * 0.5 + (second * 0.1) / 12;

  return (
    <Container>
      <HourHand $angle={hourAngle} />
      <MinuteHand $angle={minuteAngle} />
      <SecondHand $angle={secondAngle} />
      <CenterPin />
    </Container>
  );
};

export default Clock;

const Container = styled.section`
  margin: auto;
  position: relative;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: lightgray;
  height: min(50vh, 100vw);
  width: min(50vh, 100vw);
  border: min(2.5vh, 5vw) grey inset;
`;

const Hand = styled.div`
  background-color: black;
  width: 2%;
  height: 48%;
  border-radius: 50% 50% 0 0;
  position: absolute;
  top: 2%;
  left: 48%;
  transform-origin: bottom;
  transform: rotate(${({ $angle }) => $angle}deg);
  transition: transform 0.3s linear;
`;

const SecondHand = styled(Hand)`
  background-color: red;
  transition: none;
`;

const MinuteHand = styled(Hand)`
  width: 4%;
  border-radius: 40% 40% 0 0;
`;

const HourHand = styled(Hand)`
  background-color: blue;
  width: 6%;
  height: 36%;
  top: 14%;
  border-radius: 25% 25% 0 0;
`;

const CenterPin = styled.div`
  border-radius: 50%;
  width: 10%;
  height: 10%;
  background-color: grey;
  position: absolute;
  top: 45%;
  left: 45%;
`;
