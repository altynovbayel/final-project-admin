import React from 'react';
import FormInput from "../FormInput/FormInput";
import cls from "./LoginForm.module.scss";


const LoginForm = (
	{
		register,
		handleSubmit,
		errors,
		isValid,
		submitHandler,
		responseErrors
	}) => {

	return (
		<form
			className={cls.form}
			onSubmit={handleSubmit(submitHandler)}
		>
			<h3>Вход в Администрацию</h3>
			{responseErrors && <span className={cls.error}>Неправильный Email или Пароль</span>}
			<FormInput
				register={register}
				registerName={'email'}
				type={'email'}
				inputTitle={'Email Админа'}
				errors={errors?.username}
			/>
			<FormInput
				register={register}
				registerName={'password'}
				type={'password'}
				inputTitle={'Пароль Админа'}
				errors={errors?.password}
			/>
			<button
				type={'submit'}
				disabled={!isValid}
			>
				Войти
			</button>
		</form>
	);
};

export default LoginForm;
