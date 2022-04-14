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
          
        <div className="TrackListing">
            <br />
           
            <ul style={{display: "inline"}}>
                <li style={{display: "inline"}}>
                <div className="container-fluid TracksHeading">
                Tracks
            </div>

                </li>
                <li style={{display: "inline"}}> 
                <div className="container-fluid SubTracksHeading">Click on a track to get started on your journey</div>
                </li>
            

            </ul>
            
           
           
            
           
            <br />
            <div className="container-fluid">
            <ul>
                <li><img src={require("../../views/assets/nutrition.png")}/><a href="…" className="TrackName">Nutrtion</a></li>
                <li><img src={require("../../views/assets/wellness.png")}/><a href="…" className="TrackName">Wellness</a></li>
                <li><img src={require("../../views/assets/fitness.png")}/><a href="…" className="TrackName">Fitness</a></li>
               
            </ul>
            </div>
            

            
          




            
            <br />
            <br />
        </div>
        <div className="AboutUs">
        <br />
            <div className="container-fluid TracksHeading">
                About Us<br />
            </div>
            <div className="AboutDescription">
                <p>At Everything Well, our goal is to help you reach your full potential! In order to do this we have created 3
                    tracks for you to choose from; Nutrition, Wellness, & Fitness. Under each track you will find products to buy
                    to further your journey. Weather it be working out more, having more meditation time, or even eating cleaner, 
                    you will find what you need here. 

                </p>
                <br />
                <br />
                <br />

            </div>
        </div>
            
        </div>
    );
}

export default MainPage;