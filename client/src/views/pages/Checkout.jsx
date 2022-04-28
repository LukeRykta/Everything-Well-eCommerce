import React from "react";
import {Link} from "react-router-dom";

const Checkout = () => {
    return(
            <div className="WellnessBackground">
                <div style={{paddingTop: "10%", paddingBottom: "200%"}}>
                    <div className="Todo">
                        <h1><span style={{color: "white"}}>Thank you for your purchase!</span></h1>
                        <br></br>
                        <button><Link to="/" className="Home"><h5>Return to Home</h5></Link></button>
                    </div>
                </div>
            </div>
    );
};

export default Checkout;