import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from "axios";

function App() {
	const [inputLanguage, setInputLanguage] = useState("English");
	const [outputLanguage, setOutputLanguage] = useState("German");
	const [showModal, setShowModal] = useState(null);
	const [languages, setLanguages] = useState(null);
	const [textToTranslate, setTextToTranslate] = useState("");
	const [translatedText, setTranslatedText] = useState("");

	// console.log("input language: ", inputLanguage);

	const getLanguages = async () => {
		const response = await axios("http://localhost:8000/languages");
		setLanguages(response.data);
	};

	// console.log("languages: ", languages);

	const translate = async () => {
		console.log("trainsalte");
		const data = {
			textToTranslate,
			outputLanguage,
			inputLanguage,
		};
		const response = await axios.get(
			"http://localhost:8000/translation",
			{
				params: data,
			}
		);
		console.log("response", response);
		setTranslatedText(response.data.data);
	};

	console.log("translated: ", translatedText);

	useEffect(() => {
		getLanguages();
	}, []);

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
						setTextToTranslate={setTextToTranslate}
						textToTranslate={textToTranslate}
						setTranslatedText={setTranslatedText}
					></TextBox>
					<div className="arrow-container" onClick={handleClick}>
						<Arrows />
					</div>
					<TextBox
						style="output"
						selectedLanguage={outputLanguage}
						setShowModal={setShowModal}
						translatedText={translatedText}
					/>
					<div className="button-container" onClick={translate}>
						<Button />
					</div>
				</>
			)}
			{showModal && (
				<Modal
					setShowModal={setShowModal}
					languages={languages}
					chosenLanguage={
						showModal === "input" ? inputLanguage : outputLanguage
					}
					setChosenLanguage={
						showModal === "input"
							? setInputLanguage
							: setOutputLanguage
					}
				/>
			)}
		</div>
	);
}

export default App;
