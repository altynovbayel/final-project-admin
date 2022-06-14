import React from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../services/firebase/firebase";


const useIsLogin = () => {
	// const [user, setUser] = React.useState(null)

	React.useEffect(() => {
		const Listen = onAuthStateChanged(auth, currentUser => {
			if(currentUser){

			}
		})

		return () => Listen()
	}, [])



	return {

	}
};

export default useIsLogin;
