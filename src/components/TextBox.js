import SelectDropDown from "./SelectDropDown";

const TextBox = ({
	selectedLanguage,
	style,
	setShowModal,
	setTextToTranslate,
	textToTranslate,
	translatedText,
	setTranslatedText,
}) => {
	const handleClick = () => {
		setTranslatedText("");
		setTextToTranslate("");
	};

	return (
		<div className={style}>
			<SelectDropDown
				style={style}
				selectedLanguage={selectedLanguage}
				setShowModal={setShowModal}
			/>
			<textarea
				placeholder={style === "input" ? "Enter Text" : "Translation"}
				disabled={style === "output"}
				onChange={(e) => setTextToTranslate(e.target.value)}
				value={style === "input" ? textToTranslate : translatedText}
			/>
			{style === "input" && (
				<div className="delete" onClick={handleClick}>
					X
				</div>
			)}
		</div>
	);
};

export default TextBox;
