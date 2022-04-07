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
        <div className="container mt-5 FitBackground text-center">
            <div className="text-center">
                <h1>Welcome to the Home Page, {name}</h1>
                <div className="container">
                    <Row className="mt-6 ">
                        <Link to="/todo" style={{ textDecoration: 'none'}}>
                            <button className="btn btn-outline-dark my-1">To-Do</button>
                        </Link>

                        <Link to="/fitness" style={{ textDecoration: 'none'}}>
                            <button className="btn btn-outline-dark my-1">Fitness</button>
                        </Link>

                        <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-outline-dark my-1">Nutrition</button>
                        </Link>

                        <Link to="/wellness" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-outline-dark my-1">Wellness</button>
                        </Link>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default MainPage;