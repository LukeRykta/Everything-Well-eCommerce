import React from "react";
import {Link} from "react-router-dom";

const FitPage = () => {
    return(
        <div className="FitBackground">
            <div className="Page">
                <h1>Welcome to the Fitness Page</h1>
                <button>
                    <Link to="/" className="Home">return</Link>
                </button>
            </div>
        </div>
    );
}

export default FitPage;