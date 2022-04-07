import { isAuthenticated } from "../services/authService";
import { Outlet } from "react-router-dom";
import LoginPage from "../views/pages/login";

export default function AdminRoute() {
    const user = isAuthenticated();
    return user.role === 'ADMIN' ? <Outlet/> : <LoginPage/>;
};