import React from 'react';
import "./FormInput.module.scss";

const FormInput = ({register, registerName, inputTitle, type, errors}) => {
	return (
		<label>
			<span>{errors?.message}</span>
			<input
				type={type}
				placeholder={inputTitle}
				{...register(registerName, {
					required: 'Обязательное поле ⚠'
				})}
			/>
		</label>
	);
};

export default FormInput;
