import React from "react";
import Todo from "../components/Todo";
import {Link} from "react-router-dom";

const ListTest = () => {
    return (
        <div className="App">
            <Todo/>
            <Link to="/"><h2>Return to Home</h2></Link>
        </div>
    );
};

export default ListTest;