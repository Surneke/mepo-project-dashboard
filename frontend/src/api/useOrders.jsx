import {  getApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useOrders = () => {
  const {
    orders: { setOrders },
  } = useGlobalProvider();
  const changeOrderStatus = async () => {
    
  };
  const getOrders = async () => {
    try {
      const res = await getApi("/order");
      setOrders(res.data.allOrders);
    } catch (error) {
      console.log(error);
    }
  };
  return { changeOrderStatus, getOrders };
};
