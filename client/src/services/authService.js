import axios from "axios";
import {useNavigate} from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;
const jwtString = 'jwtlibraryyt';

export const loginUser = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userObj);
    const { user, token } = response.data;
    const { _id, ...userStored } = user;
    localStorage.setItem(jwtString, JSON.stringify({user: userStored, token}));
    return response;
}

export const registerUser = async (userObject) => {
    return await axios.post(`${apiUrl}/auth/signup`, userObject);
}

export const isAuthenticated = () => {
    // checks to see if login attempt is coming from browser window
    if (typeof window == 'undefined') {
        return false;
    }
    const user = JSON.parse(localStorage.getItem(jwtString));
    if (user) {
        return user;
    }
    return false;
}

export const logOut = () => {
    localStorage.removeItem(jwtString)
    window.location.reload();
}