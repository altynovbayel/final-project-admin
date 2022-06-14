import React from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../services/firebase/firebase";


const useIsLogin = () => {
	const [user, setUser] = React.useState(null)
	console.log(user)

	React.useEffect(() => {
		const Listen = onAuthStateChanged(auth, currentUser => {
			if(currentUser){

			}
		})

		return () => Listen()
	}, [])


	console.log(user)

	return {

	}
};

export default useIsLogin;
