import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return(
        <div className="HomeBackground">
            <div className="Home">
                <h1>Welcome to the Home Page</h1>
                <h2>Enjoy Your Stay~</h2>
                    <button><Link to="/todo" className="Home">TO-DO</Link></button>
                    <button><Link to="/fitness" className="Home">Fitness</Link></button>
                    <button><Link to="/nutrition" className="Home">Nutrition</Link></button>
                    <button><Link to="/wellness" className="Home">Wellness</Link></button>
                    <button><Link to="/login" className="Home">Login</Link></button>
            </div>
        </div>
    );
}

export default MainPage;