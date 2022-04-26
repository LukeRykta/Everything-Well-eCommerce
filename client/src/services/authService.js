import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const jwtString = 'jwtlibraryyt';

export const loginUser = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userObj);
    const { user, token } = response.data;
    const { _id, ...userStored } = user;
    localStorage.setItem(jwtString, JSON.stringify({user: userStored, token}));
    return response;
}

export const getUserById = async (id) => {
    return await axios.get(`${apiUrl}/auth/auth/${id}`);
}

export const registerUser = async (userObj) => {
    return await axios.post(`${apiUrl}/auth/signup`, userObj);
}

export const editUser = async (userObj, id) => {
    await axios.put(`${apiUrl}/auth/edit${id}`, userObj);
}

export const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/auth/auth/${id}`);
}


export const isAuthenticated = () => {
    // checks to see if login attempt is coming from browser window
    if (typeof window == 'undefined')
        return false;

    if (!localStorage.getItem(jwtString))
        return false;

    const {user} = JSON.parse(localStorage.getItem(jwtString));

    if (user)
        return user;

    return false;
}

export const logOut = () => {
    localStorage.removeItem(jwtString)
    window.location.reload();
}