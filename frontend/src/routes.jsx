import ".//App.css";
import Login from "./pages/login";
import { useEffect } from "react";
import Orders from "./pages/orders";
import { useAuth } from "./api/useAuth";
import { useAuthProvider } from "./context/AuthProvider";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CustomizingPageRouter } from "./custom/CustomizingPageRouter";
import { ResponsiveDrawer } from "./components/AppBar"

export const RoutesComponent = () => {
	const {
		token: { userToken }
	} = useAuthProvider();
	const userloggedin = localStorage.getItem("userLoggedIn")
	const { refreshToken } = useAuth();
	useEffect(() => {
		if (userloggedin) {
			refreshToken();
		}
		// eslint-disable-next-line
	}, [])
	return (
		<BrowserRouter>
			{userToken ? <ResponsiveDrawer /> : ""}
			<Routes>
				<Route path="/" element={userToken ? <Orders /> : <Login />} />
				<Route path="/:page" element={<CustomizingPageRouter />} />
			</Routes>

		</BrowserRouter>
	);
};