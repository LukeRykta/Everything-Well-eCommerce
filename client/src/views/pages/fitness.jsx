import React from "react";
import {Link} from "react-router-dom";

const FitPage = () => {
    return(
        <div className="FitBackground">
            <div className="mt-5 text-center container">
                <h1>Welcome to the Fitness Page</h1>
                <button className="btn btn-success">
                    <Link to="/" className="Home" style={{textDecoration: 'none'}}>return</Link>
                </button>
            </div>
        </div>
    );
}

export default FitPage;