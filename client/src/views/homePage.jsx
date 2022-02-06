import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return(
        <div className="BackgroundImage">
            <div className="Home">
                <h1>Welcome to the Home Page</h1>
                    <h2>Hope you enjoy your stay~</h2>
                <Link to="/todoPage" className="link">Click here for TODO page</Link>
            </div>
        </div>

    );
}


export default MainPage;