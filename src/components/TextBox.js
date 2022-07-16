import SelectDropDown from "./SelectDropDown";

const TextBox = ({ selectedLanguage, style, setShowModal }) => {
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
			/>
		</div>
	);
};

export default TextBox;
