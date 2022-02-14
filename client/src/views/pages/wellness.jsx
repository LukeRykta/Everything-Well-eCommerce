import React from "react";
import {Link} from "react-router-dom";

const WellPage = () => {
    return(
        <div className="WellBackground">
            <div className="Home">
                <h1>Welcome to the Wellness Page</h1>
                <button>
                    <Link to="/" className="Home">return</Link>
                </button>
            </div>
        </div>
    );
}

export default WellPage;