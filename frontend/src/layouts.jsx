import { Outlet } from "react-router";
import { ResponsiveDrawer } from "./components";
import { css, Global } from "@emotion/react";
import { CookiesProvider } from "react-cookie";


export const Layout = () => {
	return (
		<CookiesProvider>
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
			<ResponsiveDrawer />
			<Outlet />
		</CookiesProvider>
	);
};
