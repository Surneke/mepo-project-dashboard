import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	shadows: {
		1: "none",
		0: "none",
		4: "none",
		8: "none",
		16:"none"
	  },
	palette: {
		primary: {
			main: "#f2f2f9",
			text: "fff",
		},
		secondary: {
			main: "#73bcec",
		},
		success: {
			main: "#000",
		},
		text: {
			main: "#000",
			light: "#000",
		},
	},
	TextField: {
		m: 1,
		width: "50ch",
	},
	typography: {
		fontFamily: "Roboto",
		h1: {
			fontSize: "68px",
		},
		h2: {
			fontSize: "42px",
		},
		h3: {
			fontSize: "32px",
		},
		h4: {
			fontSize: "28px",
		},
		h5: {
			fontSize: "24px",
		},
		h6: {
			fontSize: "18px",
		},
		body1: {
			fontSize: "14px",
		},
	},
});
