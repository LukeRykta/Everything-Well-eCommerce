import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = async (userObj) => {
    return await axios.post(`${apiUrl}/auth/login`, userObj);
}