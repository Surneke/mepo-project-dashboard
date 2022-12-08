import { useState } from "react";
import { useAuth } from "../api/useAuth";
import Logo from "../images/black.png";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
	const { login } = useAuth();
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	})
	const style = {
		textField: {
			marginTop: "10px",
		},
	};

	const handleClick = (e) => {
		e.preventDefault();
		login(userData);
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	}
	return (
		<Box className="login_container">
			<Box className="login_item">
				<Box display="flex" flexDirection="column" height="50%">
					<Box
						height="80px"
						width="270px"
						component="img"
						src={Logo}
					/>
					<Typography variant="h3" mt="20px">
						Welcome back
					</Typography>
					<Typography
						variant="h6"
						mt="10px"
						sx={{ color: "#b6b9ca" }}
					>
						Enter your credentials to access your account.
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						component="form"
						onSubmit={handleClick}
						noValidate
					>
						<TextField
							label="Enter your email"
							variant="outlined"
							required
							fullWidth
							id="email"
							name="email"
							autoComplete="email"
							autoFocus
							sx={style.textField}
							onChange={handleChange}
						/>
						<TextField
							label="Enter your password"
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							id="password"
							autoComplete="current-password"
							sx={style.textField}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ mt: "15px", padding: "10px 10px" }}
						>
							Login
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;