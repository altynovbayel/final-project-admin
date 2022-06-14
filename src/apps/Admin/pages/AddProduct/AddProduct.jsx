import React from 'react';
import cls from "./AddProduct.module.scss";
import AddProductForm from "../../../../components/AddProductForm/AddProductForm";
import { useForm} from "react-hook-form";
import {createProduct, getAllCategories} from "../../../../configs";
import useForms from "../../hooks/useForms";

const AddProduct = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onChange'
	})
	const {categories} = useForms()

	const [chosenCategory, setChosenCategory] = React.useState('')
	const [chosenProductType, setChosenProductType] = React.useState('')

	console.log(chosenProductType, chosenCategory)

	const handleChangeCategory = e => setChosenCategory(e.target.value)
	const handleChangeProductType = e => setChosenProductType(e.target.value)
	const findChosenCategory = React.useCallback((categories) => {
		return categories.find(c => c.value === chosenCategory)
	}, [chosenCategory])
	const submitHandler = data => {
		const category = findChosenCategory(categories)
		const newData = {
			...data,
			images: [data.images],
			category: category.value,
			categoryTitle: category.label,
			favorite: false,
			reviewCount: 0,
			reviewGrade: 5,
			reviewersArr: [],
			count: 0
		}
		createProduct(newData)
			.then(r => {
			console.log(r)
		})
			.finally(() => reset())
	}

	if (!categories) return <h1>loading</h1>
	return (
		<div className={cls.container}>
			<AddProductForm
				register={register}
				errors={errors}
				isValid={isValid}
				handleSubmit={handleSubmit}
				submitHandler={submitHandler}
				handleChangeCategory={handleChangeCategory}
				handleChangeProductType={handleChangeProductType}
				categoriesOptions={categories}
			/>
		</div>
	);
};

export default AddProduct;
