import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllItems = async () => {
    return await axios.get(`${apiUrl}/items`);
}

export const getItemById = async (id) => {
    return await axios.get(`${apiUrl}/items/item/${id}`);
}

export const createItem = (itemObj) => {
    axios.post(`${apiUrl}/items/item`, itemObj);
}

export const editItem = (itemObj, id) => {
    axios.put(`${apiUrl}/items/item/${id}`, itemObj);
}

export const deleteItem = (id) => {
    axios.delete(`${apiUrl}/items/item/${id}`);
}