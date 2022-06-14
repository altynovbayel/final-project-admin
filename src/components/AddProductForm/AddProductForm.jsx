import React from 'react';
import cls from "./AddProductForm.module.scss";
import FormInput from "../FormInput/FormInput";
import FormButton from "../UI/FormButton/FormButton";
import FormTextArea from "../FormTextArea/FormTextArea";
import FormSelect from "../UI/FormSelect/FormSelect";
import {productType} from "../../utils/productType";


const AddProductForm = (
	{
		register,
		errors,
		isValid,
		handleSubmit,
		submitHandler,
		handleChangeCategory,
		handleChangeProductType,
		categoriesOptions
	}
) => {

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className={cls.form}
		>
			<div className={cls.formHeader}>
				<h2>Создание продукта</h2>
			</div>
			<div className={cls.formBody}>
				<FormInput
					register={register}
					registerName={'productName'}
					inputTitle={'Имя продукта'}
					type={'text'}
					errors={errors?.productName}
				/>
				<FormInput
					register={register}
					registerName={'price'}
					inputTitle={'Цена продукта'}
					type={'text'}
					errors={errors?.price}
				/>
				<FormInput
					register={register}
					registerName={'images'}
					inputTitle={'Фото продукта'}
					type={'url'}
					errors={errors?.images}
				/>
				<FormTextArea
					register={register}
					registerName={'description'}
					inputTitle={'Описнаие продукта'}
					errors={errors?.description}
				/>
				<FormSelect
					setChosenCategory={handleChangeCategory}
					options={categoriesOptions}
					categoryType={'Категорию'}
				/>
				<FormSelect
					setChosenCategory={handleChangeProductType}
					options={productType}
					categoryType={'Тип'}
				/>
			</div>
			<div className={cls.formFooter}>
				<FormButton
					buttonText={'Отправить'}
					isValid={isValid}
				/>
			</div>
		</form>
	);
};

export default AddProductForm;
