import React from 'react';
import FormButton from "../../../../components/UI/FormButton/FormButton";
import cls from "./AddCategories.module.scss";
import {createCategory} from "../../../../configs";



const AddCategories = () => {
	const [categoryTitle, setCategoryTitle] = React.useState('')
	const [category, setCategory] = React.useState('')

	const submitHandler = e => {
		e.preventDefault()
		const data = {
			value: category,
			label: categoryTitle
		}
		console.log(data)
		createCategory(data).then(r => {
			console.log(r)
		})
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className={cls.formHeader}>
					<h2>Создание Категорий</h2>
				</div>
				<div className={cls.formBody}>
					<input
						type="text"
						value={category}
						onChange={e => setCategory(e.target.value)}
					/>
					<input
						type="text"
						value={categoryTitle}
						onChange={e => setCategoryTitle(e.target.value)}
					/>
				</div>
				<div className={cls.formFooter}>
					<FormButton buttonText={'Отправить'}/>
				</div>
			</form>
		</div>
	);
};

export default AddCategories;
