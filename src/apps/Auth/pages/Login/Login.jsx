import React, {useState} from 'react';
import cls from "./Login.module.scss";
import {useForm} from "react-hook-form";
import LoginForm from "../../../../components/LoginForm/LoginForm";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../services/firebase/firebase";
import {useNavigate} from "react-router-dom";


// const email = 'admin@gmail.com'
// const password = 'adminreactors123'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onChange'
	})

	const [responseErrors, setResponseErrors] = useState(false)
	const navigate = useNavigate()

	const submitHandler = async data => {
		try {
			const user = await signInWithEmailAndPassword(auth, data.email, data.password)
			user && navigate('/')
		} catch (error) {
			console.log(error.message)
			error && setResponseErrors(true)
		} finally {
			reset()
		}
	}


	return (
		<div className={cls.container}>
			<LoginForm
				errors={errors}
				register={register}
				handleSubmit={handleSubmit}
				isValid={isValid}
				submitHandler={submitHandler}
				responseErrors={responseErrors}
			/>
		</div>
	);
};

export default Login;
