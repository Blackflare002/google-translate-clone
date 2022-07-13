import { useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
	const [inputLanguage, setInputLanguage] = useState("English");
	const [outputLanguage, setOutputLanguage] = useState("German");

	const handleClick = () => {
		setInputLanguage(outputLanguage);
		setOutputLanguage(inputLanguage);
	};

	return (
		<div className="app">
			<TextBox
				style="input"
				selectedLanguage={inputLanguage}
			></TextBox>
			<div className="arrow-container" onClick={handleClick}>
				<Arrows />
			</div>
			<TextBox
				style="output"
				selectedLanguage={outputLanguage}
			></TextBox>
		</div>
	);
}

export default App;
