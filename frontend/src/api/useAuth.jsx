import { postApi, getApi } from "../utils/fetchData";
import { useAuthProvider } from "../context/AuthProvider";

export const useAuth = () => {
  const {
    userDetail: { setDetail },
    token: { setUserToken },
  } = useAuthProvider();

  const login = async (data) => {
    try {
      const res = await postApi("/login", data);
      setDetail(res.data.user);
      setUserToken(res.data.token);
      localStorage.setItem("userLoggedIn", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async () => {
    try {
      const res = await getApi("/refresh_token");
      setDetail(res.data.user);
      setUserToken(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return { login, refreshToken };
};
