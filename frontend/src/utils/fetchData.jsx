import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
});

export const postApi = async (url, data) => {
    return await API.post(url, data);
};
export const getApi = async (url) => {
    return await API.get(url);
};
export const patchApi = async (url, data) => {
    return await API.patch(url, data)
};
export const deleteApi = async (url, data) => {
    return await API.delete(url, data)
};