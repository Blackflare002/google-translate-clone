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

	const getLanguages = () => {
		const options = {
			method: "GET",
			url: "https://google-translate20.p.rapidapi.com/languages",
			headers: {
				"X-RapidAPI-Key":
					"6e348233b7msh0cf4337c46e7182p1736bcjsne65c48d81a1d",
				"X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
			},
		};
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				const arrayOfData = Object.keys(response.data.data).map(
					(key) => response.data.data[key]
				);
				setLanguages(arrayOfData);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	// console.log("languages: ", languages);

	const translate = () => {
		const axios = require("axios");
		const options = {
			method: "GET",
			url: "https://google-translate20.p.rapidapi.com/translate",
			params: {
				text: textToTranslate,
				tl: outputLanguage,
				sl: inputLanguage,
			},
			headers: {
				"X-RapidAPI-Key":
					"6e348233b7msh0cf4337c46e7182p1736bcjsne65c48d81a1d",
				"X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
			},
		};
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				setTranslatedText(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
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
					></TextBox>
					<div className="arrow-container" onClick={handleClick}>
						<Arrows />
					</div>
					<TextBox
						style="output"
						selectedLanguage={outputLanguage}
						setShowModal={setShowModal}
					/>
					<div className="button-container" onClick={translate}>
						<Button/>
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
