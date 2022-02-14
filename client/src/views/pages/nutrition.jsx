import React from "react";
import {Link} from "react-router-dom";

const NutPage = () => {
    return(
        <div className="NutBackground">
            <div className="Home">
                <h1>Welcome to the Nutrition Page</h1>
                <button>
                    <Link to="/" className="Home">return</Link>
                </button>
            </div>
        </div>
    );
}

export default NutPage;