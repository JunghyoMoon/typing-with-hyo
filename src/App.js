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

const useCheck = (currentQuot) => {
	if (!currentQuot || typeof currentQuot !== "object") return;
	let counter = 0;
	const checkEachCharacter = (e) => {
		const {
			target: { value },
		} = e;
		console.log(counter);
		if (value.slice(-1) !== currentQuot[counter]) {
			console.log(currentQuot[counter]);
			console.log(value.slice(-1));
		}
		counter = counter < currentQuot.length - 1 ? ++counter : 0;
	};

	return checkEachCharacter;
};

const resetValues = () => {};

const useUpdateQuote = (quotes) => {
	const [currentQuot, setCurrentQuot] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const update = () => {
		if (currentIndex >= quotes.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};
	useEffect(() => {
		setCurrentQuot(quotes[currentIndex].split(""));
	}, [currentIndex]);

	return { currentQuot, update };
};

const useStart = () => {};

const App = () => {
	const { currentQuot, update } = useUpdateQuote(quotes);
	const check = useCheck(currentQuot);
	return (
		<Fragment>
			<GlobalStyles />
			<Container>
				<CurrentQuote>
					{currentQuot.map((_) => (
						<span>{_}</span>
					))}
				</CurrentQuote>
				<Input placeholder="start typing.." onInput={check} />
				<NextQuote></NextQuote>
			</Container>
		</Fragment>
	);
};

export default App;
