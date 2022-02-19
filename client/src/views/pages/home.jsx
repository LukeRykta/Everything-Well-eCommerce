import React from "react";
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";

const MainPage = () => {
    return(
        <div className="container mt-5">
            <div className="container text-center">
                <h1>Welcome to the Home Page</h1>
                <Row className="mt-5 text-center">
                    <Link to="/todo" style={{ textDecoration: 'none'}}><button className="btn btn-outline-dark my-1">To-Do</button></Link>
                    <Link to="/fitness" style={{ textDecoration: 'none' }}><button className="btn btn-outline-dark my-1">Fitness</button></Link>
                    <Link to="/nutrition" style={{ textDecoration: 'none' }}><button className="btn btn-outline-dark my-1">Nutrition</button></Link>
                    <Link to="/wellness" style={{ textDecoration: 'none' }}><button className="btn btn-outline-dark my-1">Wellness</button></Link>
                </Row>
            </div>
        </div>
    );
}

export default MainPage;