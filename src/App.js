import { useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
	const [inputLanguage, setInputLanguage] = useState("English");
	const [outputLanguage, setOutputLanguage] = useState("German");
	const [showModal, setShowModal] = useState(null);

	console.log("Show Modal: ", showModal);

	const handleClick = () => {
		setInputLanguage(outputLanguage);
		setOutputLanguage(inputLanguage);
	};

	return (
		<div className="app">
			{!showModal && (
				<>
					<TextBox
						style="input"
						selectedLanguage={inputLanguage}
						setShowModal={setShowModal}
					></TextBox>
					<div className="arrow-container" onClick={handleClick}>
						<Arrows />
					</div>
					<TextBox
						style="output"
						selectedLanguage={outputLanguage}
						setShowModal={setShowModal}
					></TextBox>
				</>
			)}
			{showModal && <Modal />}
		</div>
	);
}

export default App;
