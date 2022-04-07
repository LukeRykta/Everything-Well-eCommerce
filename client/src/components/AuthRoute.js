import {isAuthenticated} from "../services/authService";
import {Outlet} from "react-router-dom";
import LoginPage from "../views/pages/login";

const AuthRoute = () => {
    const user = isAuthenticated();

    return user ? <Outlet/> : <LoginPage/>;
}

export default AuthRoute;