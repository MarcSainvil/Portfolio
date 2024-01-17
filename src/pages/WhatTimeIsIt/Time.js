import styled from "styled-components";

const Time = ({hour, minute, second}) => {
	return (
		<section>
			<Hour>{hour}</Hour> : 
			<span>{minute < 10 && 0}{minute}</span> : 
			<Second>{second < 10 && 0}{second}</Second>
		</section>
	)
}

export default Time

const Hour = styled.span`
color: blue;
font-weight: 900;
`

const Second = styled.span`
color: red;
`