import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return(
        <div className="HomeBackground">
            <div className="Home">
                <h1>Welcome to the Home Page</h1>
                <h2>Enjoy Your Stay~</h2>
                <ul>
                    <Link to="/todoPage" className="Home"><li>TO-DO</li></Link>
                    <Link to="/404" className="Home"><li>Meaning of Life</li></Link>
                </ul>
            </div>
        </div>

    );
}

export default MainPage;