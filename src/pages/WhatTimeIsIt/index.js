import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Time from "./Time";
import Clock from "./Clock";
import BugTimeButton from "./BugTimeButton";

const WhatTimeIsIt = () => {
	const [viewingBugTime, setViewingBugTime] = useState(false);
  const [time, setTime] = useState(new Date());

  const second = time.getSeconds();
  const hour = time.getHours() >= 12 ? time.getHours() - 12 : time.getHours();
  const minute = time.getMinutes();

  return (
    <Container>
      <nav>
        <Link to="/">Go Back</Link>
      </nav>
      <header>
        <h2>🕥 What time is it? 🕑</h2>
      </header>
      <Time hour={hour} minute={minute} second={second}/>
			<Clock hour={hour} minute={minute} second={second}/>
			<BugTimeButton value={viewingBugTime} setter={setViewingBugTime}/>
    </Container>
  );
};

export default WhatTimeIsIt;

const Container = styled.div`
  padding-top: 5vh;
  & header {
    margin: 5vh 0;
  }
  & section {
    display: flex;
    justify-content: center;
    align-items: center;
		margin-bottom: 5vh;
  }
`;