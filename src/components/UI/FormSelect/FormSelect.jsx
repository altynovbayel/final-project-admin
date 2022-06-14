import React from 'react';
import cls from "./FormSelect.module.scss";


const FormSelect = ({options, setChosenCategory, categoryType}) => {

	return <select
		onChange={e => setChosenCategory(e)}
		className={cls.formSelect}
	>
		<option
			selected
			disabled
			value={`choosing ${categoryType}`}
		>
			{`Выберите ${categoryType}`}
		</option>
		{
			options.map(category => (
				<option
					key={category.id}
					value={category.value}
				>{category.label}</option>
			))
		}
	</select>
};

export default FormSelect;
