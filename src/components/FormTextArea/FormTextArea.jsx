import React from 'react';
import cls from "./FormTextArea.module.scss";


const FormTextArea = ({register, registerName, inputTitle, type, errors}) => {
	return (
		<label>
			<span>{errors?.message}	</span>
			<textarea
				className={cls.textarea}
				{...register(registerName, {
					required: 'Обязательное поле ⚠'
				})}
				placeholder={inputTitle}
			>
			</textarea>
		</label>
	);
};

export default FormTextArea;
