import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllItems = async () => {
    return await axios.get(`${apiUrl}/items`);
}

export const getItemById = async (id) => {
    return await axios.get(`${apiUrl}/items/item/${id}`);
}

export const createItem = async (itemObj) => {
    return await axios.post(`${apiUrl}/items/item`, itemObj);
}

export const editItem = async (itemObj, id) => {
    await axios.put(`${apiUrl}/items/item/${id}`, itemObj);
}

export const deleteItem = async (id) => {
    await axios.delete(`${apiUrl}/items/item/${id}`);
}