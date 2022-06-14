import React from 'react';
import cls from "./FormButton.module.scss";


const FormButton = ({buttonText, isValid}) => {
	return <button
		// disabled={!isValid}
		className={cls.formButton}
	>{buttonText}</button>
};

export default FormButton;
