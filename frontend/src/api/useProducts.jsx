import { getApi, postApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useProducts = () => {
    const {
        products: { setProducts }
    } = useGlobalProvider();

    const getProducts = async () => {
        try {
            const res = await getApi("/products");
            setProducts(res.data.products);
        } catch (error) {
            console.log(error)
        }
    }
    return { getProducts };
}