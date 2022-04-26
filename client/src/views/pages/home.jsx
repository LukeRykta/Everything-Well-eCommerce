import React from "react";
import {isAuthenticated} from "../../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const MainPage = () => {
    const user = isAuthenticated();
    let name = user.name;
    if (name==null){
        name = "Guest";
    }

    return(

        <div>
            <div className="TestBackground">
            
            <div className="mt-5 text-center h1 itemCard container-fluid" style={{width: "40%"}} >
                <h1><span style={{color: "#ffffff"}}>Welcome to the Home Page, </span>{name}</h1>
            </div>

            <div 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: "center",
                lineHeight:"100px",
                width: "97%",
            }} className="container-fluid MainHeading flex-column">Disover Your Life<br /> And Do it Well</div>
            <div style= {{width: "97%"}} className="container-fluid SubMainHeading ">Take control of your life</div>

        </div>
          
        <div id="Tracks" className="TrackListing">
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
            <div className="container-fluid text-center">
            <ul>
                <li><img src={require("../../views/assets/nutrition.png")}/><a href="/nutrition" className="TrackName">Nutrition</a></li>
                <li><img src={require("../../views/assets/wellness.png")}/><a href="/wellness" className="TrackName">Wellness</a></li>
                <li><img src={require("../../views/assets/fitness.png")}/><a href="/fitness" className="TrackName">Fitness</a></li>
               
            </ul>
            </div>   
            <br />
            <br />
        </div>
        <div id="AboutUs" className="AboutUs">
        <br />
            <div className="container-fluid TracksHeading">
                About Us<br />
            </div>
            <div className="AboutDescription">
                <p>At Everything Well, our goal is to help you reach your full potential! In order to do this we have created three
                    tracks for you to choose from: <b>Nutrition, Wellness, & Fitness.</b> Under each track you will find products to buy
                    to further your journey. Whether it be working out more, having more meditation time, or even eating cleaner,
                    you will find what you need here.
                </p>
                <br />
                <br />
                <br />
            </div>
        </div>

  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>
					<p className="white-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
					</p>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Latest themes
					</div>
					<div className="footer-links">
						<a href="#">
							Appointment
						</a>
						<a href="#">
							Health center
						</a>
						<a href="#">
							Quality
						</a>
						<a href="#">
							Wallstreet
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Quick Links
					</div>
					<div className="footer-links">
						<a href="#">
							Blog
						</a>
						<a href="#">
							FAQ
						</a>
						<a href="#">
							Terms & conditions
						</a>
						<a href="#">
							Privacy policy
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Support
					</div>
					<div className="footer-links">
						<a href="#">
							Affiliate
						</a>
						<a href="#">
							Login
						</a>
						<a href="#">
							All theme package
						</a>
						<a href="#">
							Support forum
						</a>
					</div>

					<div className="footer-social-links m-t-30">
						<li>
							<a href="#">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="fa fa-youtube" aria-hidden="true"></i>
							</a>
                            <FontAwesomeIcon icon={faFacebook} size="4x" className="icon" beat/>
                			<FontAwesomeIcon icon={faTwitter} size="4x" className="icon" beat/>
                			<FontAwesomeIcon icon={faInstagram} size="4x" className="icon" beat/>
						</li>
					</div>
				</div>
			</div>
		</div>

	</footer>
	<div className="footer-bottom">
		Copyright © 2022 Group 11, All Rights Reserved
	</div>
    	</div>
	</div>

        </div>
    );
}

export default MainPage;