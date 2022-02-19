import React from "react";
import Todo from "../../components/todo/todo";
import {Link} from "react-router-dom";

const ListTest = () => {
    return (
        <div className="TodoBackground">
            <div className="Todo">
                <Todo/>
                <Link to="/" className="Home"><h2>Return to Home</h2></Link>
            </div>
        </div>
    );
};

export default ListTest;