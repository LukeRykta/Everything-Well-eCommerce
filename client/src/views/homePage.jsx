import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return(

        <div className="App">
            <h1>Welcome to the Home Page</h1>
            <div className="App2">
                <h2>Hope you enjoy your stay~</h2>
            </div>
            <Link to="/todoPage">Click here for TODO page</Link>
            <video loop autoPlay>
                <source
                    src='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
                    type='video/mp4'
                />
                Your browser does not support the video tag.
            </video>
        </div>

    );
}


export default MainPage;