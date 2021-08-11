import React, { Fragment, useRef, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { quotes } from "./quotes.js";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 60%;
	padding: 5px 0px;
	font-size: 25px;
	border: none;
	border-bottom: 2px solid black;
	text-align: center;
	&:focus {
		outline: none;
		text-align: left;
	}
`;

const CurrentQuote = styled.div`
	margin-bottom: 30px;
`;

const NextQuote = styled.span``;

let currentQuoteNum = 0;
let error = 0;

const checkEachCharacter = (e) => {
	console.log(e.target.value);
};

const resetValues = () => {};

const updateQuote = () => {};

const startTyping = () => {
	resetValues();
	updateQuote();
};

const useUpdateQuote = (quotes) => {
	const [currentQuot, setCurrentQuot] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const update = () => {
		setCurrentIndex(currentIndex + 1);
	};
	useEffect(() => {
		console.log(currentIndex);
		setCurrentQuot(quotes[currentIndex].split(""));
	}, [currentIndex]);

	return { currentQuot, update };
};

const App = () => {
	const { currentQuot, update } = useUpdateQuote(quotes);
	return (
		<Fragment>
			<GlobalStyles />
			<Container>
				<CurrentQuote>
					{currentQuot.map((_) => (
						<span>{_}</span>
					))}
				</CurrentQuote>
				<Input placeholder="start typing.." onInput={update} />
				<NextQuote></NextQuote>
			</Container>
		</Fragment>
	);
};

export default App;
