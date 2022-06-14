import {Route, Routes} from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import * as AdminPages from "./apps/Admin/pages/index";
import * as AuthPages from "./apps/Auth/pages/index";
import {Navigate} from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route element={<PrivateRoutes/>}>
				<Route path={'/'} element={<AdminPages.AddProduct/>}/>
				<Route path={'/add/category'} element={<AdminPages.AddCategories/>}/>
				<Route path={'*'} element={<Navigate to={'/'}/>}/>
			</Route>
			<Route path={'/user/login'} element={<AuthPages.Login/>}/>
			<Route path={'*'} element={<Navigate to={'/'}/>}/>
		</Routes>
	);
}

export default App;
