import { getApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useUsers = () => {
  const {
    users: { setUsers },
  } = useGlobalProvider();

  const getUsers = async () => {
    try {
      const res = await getApi("/users");
      setUsers(res.data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return { getUsers };
};
