import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
import useIsLogin from "../../apps/Auth/hooks/useIsLogin";

const PrivateRoutes = () => {
	// const {user} = useIsLogin()
	// console.log(user)
	const user = true
	return user ? <Outlet/> : <Navigate to={'/user/login'}/>
};

export default PrivateRoutes;
