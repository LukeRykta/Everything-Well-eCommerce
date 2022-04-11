import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {isAuthenticated} from "../../services/authService";

const MainPage = () => {
    const user = isAuthenticated();
    let name = user.name;
    if (name==null){
        name = "Guest";
    }

    return(
        <div className="TestBackground">
            <div className="mt-5 text-center h1 itemCard container" style={{background: "#66d37e", width: window.innerWidth/2, height: window.innerHeight/2}}>
                <h1><span style={{color: "#ffffff"}}>Welcome to the Home Page, </span>{name}</h1>
                <Row className="mt-4">
                    <div>
                        <Link to="/todo" style={{ textDecoration: 'none'}}>
                            <button className="btn btn-outline-dark my-1">To-Do</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/fitness" style={{ textDecoration: 'none'}}>
                            <button className="btn btn-outline-dark my-1">Fitness</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-outline-dark my-1">Nutrition</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/wellness" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-outline-dark my-1">Wellness</button>
                        </Link>
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default MainPage;