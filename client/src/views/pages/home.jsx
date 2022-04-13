import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {isAuthenticated} from "../../services/authService";
import {nutritionImage} from "../../views/assets/nutrition.png";



const MainPage = () => {
    const user = isAuthenticated();
    let name = user.name;
    if (name==null){
        name = "Guest";
    }

    return(
        <div>
            <div className="TestBackground">



            <div className="mt-5 text-center h1 itemCard container-fluid" style={{width: "50%"}} >
                <h1><span style={{color: "#ffffff"}}>Welcome to the Home Page, </span>{name}</h1>
            </div>

            
            <div 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: "center",
                lineHeight:"100px",
            }}className="container-fluid MainHeading">Disover Your Life<br /> And Do it Well</div>
            <div className="container-fluid SubMainHeading ">Take control of your life</div>
           
            

                
        </div>
          
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} className="TrackListing">
            <br />
            <div className="TracksHeading">
                Tracks
            </div>
           
            <div className="TrackIcons">
            <span>
            <br />
            <a href='/nutrition'><img src={require("../../views/assets/nutrition.png")} /></a>

            <a href='/wellness'><img src={require("../../views/assets/wellness.png")} /></a>

            <a href='/fitness'><img src={require("../../views/assets/fitness2.png")} /></a>

            </span>

            </div>
            
    
        </div>
            
        </div>
    );
}

export default MainPage;