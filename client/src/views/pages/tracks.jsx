import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {isAuthenticated} from "../../services/authService";


const TrackPart = () => {
   <h1>HELLO</h1>

    return(
        <div className="Tracks">
        <Row className="mt-4">

            <li>
                <a href='/nutrition'><img src={require("../../views/assets/nutrition.png")} /></a>

                <a href='/wellness'><img src={require("../../views/assets/wellness.png")} /></a>

                <a href='/fitness'><img src={require("../../views/assets/fitness2.png")} /></a></li>




        </Row>
    </div>
    );
}

    
        
    



export default TrackPart;