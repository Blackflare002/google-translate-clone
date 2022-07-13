import SelectDropDown from "./SelectDropDown";

const TextBox = ({selectedLanguage, style }) => {
	return (
		<div className={style}>
			<SelectDropDown 
			selectedLanguage={selectedLanguage}
			/>
			<textarea
				placeholder={style === "input" ? "Enter Text" : "Translation"}
				disabled={style === "output"}
			/>
		</div>
	);
};

export default TextBox;
