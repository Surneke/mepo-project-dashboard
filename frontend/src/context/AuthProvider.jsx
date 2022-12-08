import { createContext, useContext,  useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userToken, setUserToken] = useState("");
	const [detail, setDetail] = useState({});
	const value = {
		userDetail: { detail, setDetail },
		token: { userToken, setUserToken }
	}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};
export const useAuthProvider = () => useContext(AuthContext);
