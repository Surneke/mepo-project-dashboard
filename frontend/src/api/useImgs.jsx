import { postApi, getApi, patchApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";
import axios from "axios"

export const useImgs = () => {
 const { images: {
    images,
    setImages,
  },} = useGlobalProvider();

    const uploadImg = async (data) => {
        console.log(data);
        try {
            // const res = await axios.post("/img",{FileList: data});
            // console.log(res);
            // setImages()
        } catch (error) {
            console.log(error);
        }
    };

    const deleteImg = async (data) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return {uploadImg, deleteImg}
}